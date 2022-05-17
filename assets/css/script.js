$("#form-control").submit(function (event) {
    console.log("here");
    event.preventDefault();
    $(".resultContainer").show();
    $(".reset").show();
    $(".jumbotron").fadeOut(200);
    $("#btn-place").fadeOut(200);
 

    (async () => {
      let encounter = new Encounter;
      encounter.partyLevel = $("#partyLevel").val();
      encounter.partyMembers = $("#partyMembers").val();
      encounter.challengeDifficulty = $("#challengeDifficulty").val();
      encounter.monsterType = $("#monsterType").val();
      encounter.environment = $("#environment").val();
      encounter.partyXpThreshold(encounter.partyMembers, encounter.challengeDifficulty, encounter.partyLevel);
      await encounter.encounterGen();
      for (let i = 0; i < encounter.encounterArray.length; i++) {
        
        if ((`<p>${encounter.encounterArray[i].name}` !== "null")) {
          $(`#monsterOutput${i}`).html(`<p>${encounter.encounterArray[i].name}</p>`);
          if ((`<p>${encounter.encounterArray[i].challenge_rating}` !== "null"))
            $(`#crOutput${i}`).html(`<p>${encounter.encounterArray[i].challenge_rating}.</p>`);
          $(`#monsterOutput${i}`).click(function() {
            for (let j = 0; j < encounter.encounterArray.length; j++){
              if (i==j) {
                $(`#xtra${i}`).toggle();
                $(`#xtra${i}`).html("  HP: " + `<span>${encounter.encounterArray[i].hit_points}</span>` + "  AC: " + `<span>${encounter.encounterArray[i].armor_class}</span>` +  " Type: " + `<span>${encounter.encounterArray[i].type}</span>`);
              }
              else {
                $(`#xtra${i}`).hide();
              }
          }
        })
      }
    }
  })
})