function checkMaterials(){

    // Check IronHeart
    if(improviumAmount >= 1 && metalliumAmount >= 1){
        var obtainable = document.getElementById("IronHeart");
        obtainable.setAttribute('src', './tracker_img/tweaks/IronHeart.webp');
    } else {
        var obtainable = document.getElementById("IronHeart");
        obtainable.setAttribute('src', './tracker_img/tweaks/IronHeart_empty.webp');
    }

    
    

    // Check ToolAssist
    if(improviumAmount >= 1 && techniumAmount >= 1){
        var obtainable = document.getElementById("ToolAssist");
        obtainable.setAttribute('src', './tracker_img/tweaks/ToolAssist.webp');
     } else {
        var obtainable = document.getElementById("ToolAssist");
        obtainable.setAttribute('src', './tracker_img/tweaks/ToolAssist_empty.webp');
}

    // Check FleetFoot
    if(improviumAmount >= 1 && techniumAmount >= 1 && ivoilAmount >= 1 && document.getElementById('Grass').checked || improviumAmount >= 1 && techniumAmount >= 1 && ivoilAmount >= 1 && document.getElementById('Sand').checked|| improviumAmount >= 1 && techniumAmount >= 1 && ivoilAmount >= 1 && document.getElementById('Smog').checked){
        var obtainable = document.getElementById("FleetFoot");
        obtainable.setAttribute('src', './tracker_img/tweaks/FleetFoot.webp');
     } else {
        var obtainable = document.getElementById("FleetFoot");
        obtainable.setAttribute('src', './tracker_img/tweaks/FleetFoot_empty.webp');
}


    // Check Spindle
    if(techniumAmount >= 1 && metalliumAmount >= 1 && document.getElementById('Grass').checked || techniumAmount >= 1 && metalliumAmount >= 1 && document.getElementById('Sea').checked || techniumAmount >= 1 && metalliumAmount >= 1 && document.getElementById('Dark').checked){
        var obtainable = document.getElementById("Spindle");
        obtainable.setAttribute('src', './tracker_img/tweaks/Spindle.webp');
     } else {
        var obtainable = document.getElementById("Spindle");
        obtainable.setAttribute('src', './tracker_img/tweaks/Spindle_empty.webp');
}

    // Check CooldownS
    if(improviumAmount >= 1 && techniumAmount >= 1 && ivoilAmount >= 1 && document.getElementById('Coolant').checked){
        var obtainable = document.getElementById("CooldownS");
        obtainable.setAttribute('src', './tracker_img/tweaks/CooldownS.webp');
     } else {
        var obtainable = document.getElementById("CooldownS");
        obtainable.setAttribute('src', './tracker_img/tweaks/CooldownS_empty.webp');
}

    // Check CooldownB
    if(improviumAmount >= 1 && metalliumAmount >= 1 && ivoilAmount >= 1 && document.getElementById('Coolant').checked){
        var obtainable = document.getElementById("CooldownB");
        obtainable.setAttribute('src', './tracker_img/tweaks/CooldownB.webp');
     } else {
        var obtainable = document.getElementById("CooldownB");
        obtainable.setAttribute('src', './tracker_img/tweaks/CooldownB_empty.webp');
}

    // Check WaveyBeam
    if(improviumAmount >= 1 && metalliumAmount >= 1 && techniumAmount >= 1 && document.getElementById('Penetration').checked){
        var obtainable = document.getElementById("WaveyBeam");
        obtainable.setAttribute('src', './tracker_img/tweaks/WaveyBeam.webp');
    } else {
        var obtainable = document.getElementById("WaveyBeam");
        obtainable.setAttribute('src', './tracker_img/tweaks/WaveyBeam_empty.webp');
}

    // Check ShockValue
    if(improviumAmount >= 1 && techniumAmount >= 1 && document.getElementById('Grass').checked || improviumAmount >= 1 && techniumAmount >= 1 && document.getElementById('Wood').checked || improviumAmount >= 1 && techniumAmount >= 1 && document.getElementById('Dark').checked){
        var obtainable = document.getElementById("ShockValue");
        obtainable.setAttribute('src', './tracker_img/tweaks/ShockValue.webp');
    } else {
        var obtainable = document.getElementById("ShockValue");
        obtainable.setAttribute('src', './tracker_img/tweaks/ShockValue_empty.webp');
}

    // Check Breathless
    if(improviumAmount >= 1 && metalliumAmount >= 1 && document.getElementById('Sand').checked || improviumAmount >= 1 && metalliumAmount >= 1 && document.getElementById('Sea').checked || improviumAmount >= 1 && metalliumAmount >= 1 && document.getElementById('Smog').checked){
        var obtainable = document.getElementById("Breathless");
        obtainable.setAttribute('src', './tracker_img/tweaks/Breathless.webp');
    } else {
        var obtainable = document.getElementById("Breathless");
        obtainable.setAttribute('src', './tracker_img/tweaks/Breathless_empty.webp');
}

    // Check Detonator
    if(improviumAmount >= 1 && ivoilAmount >= 2 && document.getElementById('Chemistry').checked){
        var obtainable = document.getElementById("Detonator");
        obtainable.setAttribute('src', './tracker_img/tweaks/Detonator.webp');
    } else {
        var obtainable = document.getElementById("Detonator");
        obtainable.setAttribute('src', './tracker_img/tweaks/Detonator_empty.webp');
}


    // Check BlastRadius
    if(improviumAmount >= 1 && metalliumAmount >= 2 && document.getElementById('Anger').checked){
        var obtainable = document.getElementById("BlastRadius");
        obtainable.setAttribute('src', './tracker_img/tweaks/BlastRadius.webp');
    } else {
        var obtainable = document.getElementById("BlastRadius");
        obtainable.setAttribute('src', './tracker_img/tweaks/BlastRadius_empty.webp');
}

    // Check Dodger
    if(improviumAmount >= 1 && ivoilAmount >= 2 && document.getElementById('Parkour').checked){
        var obtainable = document.getElementById("Dodger");
        obtainable.setAttribute('src', './tracker_img/tweaks/Dodger.webp');
    } else {
        var obtainable = document.getElementById("Dodger");
        obtainable.setAttribute('src', './tracker_img/tweaks/Dodger_empty.webp');
}

    // Check Meditation
    if(improviumAmount >= 1 && techniumAmount >= 1 && ivoilAmount >= 1 && document.getElementById('Anxiety').checked){
        var obtainable = document.getElementById("Meditation");
        obtainable.setAttribute('src', './tracker_img/tweaks/Meditation.webp');
     } else {
        var obtainable = document.getElementById("Meditation");
        obtainable.setAttribute('src', './tracker_img/tweaks/Meditation_empty.webp');
}

    // Check Sleuth
    if(improviumAmount >= 1 && techniumAmount >= 1 && metalliumAmount >= 1 && document.getElementById('Secret').checked){
        var obtainable = document.getElementById("Sleuth");
        obtainable.setAttribute('src', './tracker_img/tweaks/Sleuth.webp');
     } else {
        var obtainable = document.getElementById("Sleuth");
        obtainable.setAttribute('src', './tracker_img/tweaks/Sleuth_empty.webp');
}

    // Check Featherweight
    if(improviumAmount >= 1 && techniumAmount >= 1 && ivoilAmount >= 1 && document.getElementById('Ascend').checked){
        var obtainable = document.getElementById("Featherweight");
        obtainable.setAttribute('src', './tracker_img/tweaks/Featherweight.webp');
     } else {
        var obtainable = document.getElementById("Featherweight");
        obtainable.setAttribute('src', './tracker_img/tweaks/Featherweight_empty.webp');
}

    // Check Roulette
    if(improviumAmount >= 3 && document.getElementById('Insanity').checked){
        var obtainable = document.getElementById("Roulette");
        obtainable.setAttribute('src', './tracker_img/tweaks/Roulette.webp');
     } else {
        var obtainable = document.getElementById("Roulette");
        obtainable.setAttribute('src', './tracker_img/tweaks/Roulette_empty.webp');
}

}






// Tweaks que precisam de improvium:
// IronHeart, ToolAssist, FleetFoot, CooldownS, CooldownB, WaveyBeam, ShockValue, Breathless, Detonator, Blast Radius, Dodger, Meditation, Sleuth, Featherweight, Roulette

// Tweaks que precisam de Technium:
// ToolAssist, FleetFoot, Spindle, Cooldown S., WaveyBeam, ShockValue, Meditation, Sleuth, Featherweight

// Tweaks que precisam de Metallium:
// IronHeart, Spindle, Cooldown B., WaveyBeam, Breathless, BlastRadius, Sleuth

// Tweaks que precisam de Ivory Oil:
// FleetFoot, Cooldown S., Cooldown B., Detonator, Dodger, Meditation, Featherweight