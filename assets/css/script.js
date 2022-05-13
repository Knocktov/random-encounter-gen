import './styles.css';
import $ from "jquery";

import { Encounter } from './gen.js';

  $("#form-control").submit(function (event) {
    console.log(here);
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
  
      if ((`<p>${encounter.encounterArray[0].name}` !== "null")) {
        $("#monsterOutput0").html(`<p>${encounter.encounterArray[0].name}</p>`);
        if ((`<p>${encounter.encounterArray[0].challenge_rating}` !== "null"))
          $("#crOutput0").html(`<p>${encounter.encounterArray[0].challenge_rating}.</p>`);
        $("#monsterOutput0").click(function() { 
          $("#xtra0").toggle();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra0").html("  HP: " + `<span>${encounter.encounterArray[0].hit_points}</span>` + "  AC: " + `<span>${encounter.encounterArray[0].armor_class}</span>` +  " Type: " + `<span>${encounter.encounterArray[0].type}</span>`);
          
        });
      }
      
      if ((`<p>${encounter.encounterArray[1].name}` !== "null")) {
        $("#monsterOutput1").html(`<p>${encounter.encounterArray[1].name}</p>`);
        if ((`<p>${encounter.encounterArray[1].challenge_rating}` !== "null"))
          $("#crOutput1").html(`<p>${encounter.encounterArray[1].challenge_rating}.</p>`);
        $("#monsterOutput1").click(function() { 
          $("#xtra1").toggle();
          $("#xtra0").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra1").html(" HP: " +`<span>${encounter.encounterArray[1].hit_points}</span>` +  " AC: " + `<span>${encounter.encounterArray[1].armor_class}</span>` + " Type: " + `<span>${encounter.encounterArray[1].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[2].name}` !== "null")) {
        $("#monsterOutput2").html(`<p>${encounter.encounterArray[2].name}</p>`);
        if ((`<p>${encounter.encounterArray[2].challenge_rating}` !== "null"))
          $("#crOutput2").html(`<p>${encounter.encounterArray[2].challenge_rating}.</p>`);
        $("#monsterOutput2").click(function() { 
          $("#xtra2").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra2").html(" HP: " + `<span>${encounter.encounterArray[2].hit_points}</span>` +  " AC: " + `<span>${encounter.encounterArray[2].armor_class}</span>` +  " Type: " +`<span>${encounter.encounterArray[2].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[3].name}` !== "null")) {
        $("#monsterOutput3").html(`<p>${encounter.encounterArray[3].name}</p>`);
        if ((`<p>${encounter.encounterArray[3].challenge_rating}` !== "null"))
          $("#crOutput3").html(`<p>${encounter.encounterArray[3].challenge_rating}.</p>`);
        $("#monsterOutput3").click(function() { 
          $("#xtra3").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra3").html(" HP: " + `<span>${encounter.encounterArray[3].hit_points}</span>` + " AC: " + `<span>${encounter.encounterArray[3].armor_class}</span>` + " Type: " + `<span>${encounter.encounterArray[3].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[4].name}` !== "null")) {
        $("#monsterOutput4").html(`<p>${encounter.encounterArray[4].name}</p>`);
        if ((`<p>${encounter.encounterArray[4].challenge_rating}` !== "null"))
          $("#crOutput4").html(`<p>${encounter.encounterArray[4].challenge_rating}.</p>`);
        $("#monsterOutput4").click(function() { 
          $("#xtra4").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra4").html(" HP: " + `<span>${encounter.encounterArray[4].hit_points}</span>` + " AC: " + `<span>${encounter.encounterArray[4].armor_class}</span>` +  " Type: " + `<span>${encounter.encounterArray[4].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[5].name}` !== "null")) {
        $("#monsterOutput5").html(`<p>${encounter.encounterArray[5].name}</p>`);
        if ((`<p>${encounter.encounterArray[5].challenge_rating}` !== "null"))
          $("#crOutput5").html(`<p>${encounter.encounterArray[5].challenge_rating}.</p>`);
        $("#monsterOutput5").click(function() { 
          $("#xtra5").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra5").html("HP: " + `<span>${encounter.encounterArray[5].hit_points}</span>` + " AC: " + `<span>${encounter.encounterArray[5].armor_class}</span>` + " Type: " + `<span>${encounter.encounterArray[5].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[6].name}` !== "null")) {
        $("#monsterOutput6").html(`<p>${encounter.encounterArray[6].name}</p>`);
        if ((`<p>${encounter.encounterArray[6].challenge_rating}` !== "null"))
          $("#crOutput6").html(`<p>${encounter.encounterArray[6].challenge_rating}.</p>`);
        $("#monsterOutput6").click(function() { 
          $("#xtra6").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra6").html("HP: " + `<span>${encounter.encounterArray[6].hit_points}</span>` + " C. " + `<span>${encounter.encounterArray[6].armor_class}</span>` + " Type: " + `<span>${encounter.encounterArray[6].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[7].name}` !== "null")) {
        $("#monsterOutput7").html(`<p>${encounter.encounterArray[7].name}</p>`);
        if ((`<p>${encounter.encounterArray[7].challenge_rating}` !== "null"))
          $("#crOutput7").html(`<p>${encounter.encounterArray[7].challenge_rating}.</p>`);
        $("#monsterOutput7").click(function() { 
          $("#xtra7").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra7").html("HP: " + `<span>${encounter.encounterArray[7].hit_points}</span>` + " AC: " + `<span>${encounter.encounterArray[7].armor_class}</span>` + " Type: " + `<span>${encounter.encounterArray[7].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[8].name}` !== "null")) {

        $("#monsterOutput8").html(`<p>${encounter.encounterArray[8].name}</p>`);
        if ((`<p>${encounter.encounterArray[8].challenge_rating}` !== "null"))
          $("#crOutput8").html(`<p>${encounter.encounterArray[8].challenge_rating}.</p>`);
        $("#monsterOutput8").click(function() { 
          $("#xtra8").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra9").hide();
          $("#xtra10").hide();
          $("#xtra8").html("HP: " + `<span>${encounter.encounterArray[8].hit_points}</span>` + " AC: " + `<span>${encounter.encounterArray[8].armor_class}</span>` + " Type: " + `<span>${encounter.encounterArray[8].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[9].name}` !== "null")) {
        $("#monsterOutput9").html(`<p>${encounter.encounterArray[9].name}</p>`);
        if ((`<p>${encounter.encounterArray[9].challenge_rating}` !== "null"))
          $("#crOutput9").html(`<p>${encounter.encounterArray[9].challenge_rating}.</p>`);
        $("#monsterOutput9").click(function() { 
          $("#xtra9").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra10").hide();
          $("#xtra9").html("HP: " + `<span>${encounter.encounterArray[9].hit_points}</span>` + " AC: "+ `<span>${encounter.encounterArray[9].armor_class}</span>` + " Type: " + `<span>${encounter.encounterArray[9].type}</span>`);
        });
      }
      if ((`<p>${encounter.encounterArray[10].name}` !== "null")) {
        $("#monsterOutput10").html(`<p>${encounter.encounterArray[10].name}</p>`);
        if ((`<p>${encounter.encounterArray[10].challenge_rating}` !== "null"))
          $("#crOutput10").html(`<p>${encounter.encounterArray[10].challenge_rating}.</p>`);
        $("#monsterOutput10").click(function() { 
          $("#xtra10").toggle();
          $("#xtra0").hide();
          $("#xtra1").hide();
          $("#xtra2").hide();
          $("#xtra3").hide();
          $("#xtra4").hide();
          $("#xtra5").hide();
          $("#xtra6").hide();
          $("#xtra7").hide();
          $("#xtra8").hide();
          $("#xtra9").hide();
          $("#xtra10").html("HP: " + `<span>${encounter.encounterArray[10].hit_points}</span>` + " AC: "+ `<span>${encounter.encounterArray[10].armor_class}</span>` + " Type: " + `<span>${encounter.encounterArray[10].type}</span>`);
        });
      }
    })(); 
  });