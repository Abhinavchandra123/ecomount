function legacyFunction() {
  var legacydots = document.getElementById("legacydots");
  var legacymoreText = document.getElementById("legacymore");
  var legacybtnText = document.getElementById("legacymyBtn");

  if (legacydots.style.display === "none") {
    legacydots.style.display = "inline";
    legacybtnText.innerHTML = "Read more <i class='bi bi-arrow-right'></i>"; 
    legacymoreText.style.display = "none";
  } else {
    legacydots.style.display = "none";
    legacybtnText.innerHTML = "<i class='bi bi-arrow-left'></i> Read less"; 
    legacymoreText.style.display = "inline";
  }

}

function qualityFunction() {
    var qualitydots = document.getElementById("qualitydots");
    var qualitymoreText = document.getElementById("qualitymore");
    var qualitybtnText = document.getElementById("qualitymyBtn");
  
    if (qualitydots.style.display === "none") {
      qualitydots.style.display = "inline";
      qualitybtnText.innerHTML = "Read more <i class='bi bi-arrow-right'></i>"; 
      qualitymoreText.style.display = "none";
    } else {
      qualitydots.style.display = "none";
      qualitybtnText.innerHTML = "<i class='bi bi-arrow-left'></i> Read less"; 
      qualitymoreText.style.display = "inline";
    }

}

function craftsFunction() {
    var craftsdots = document.getElementById("craftsdots");
    var craftsmoreText = document.getElementById("craftsmore");
    var craftsbtnText = document.getElementById("craftsmyBtn");
  
    if (craftsdots.style.display === "none") {
      craftsdots.style.display = "inline";
      craftsbtnText.innerHTML = "Read more <i class='bi bi-arrow-right'></i>"; 
      craftsmoreText.style.display = "none";
    } else {
      craftsdots.style.display = "none";
      craftsbtnText.innerHTML = "<i class='bi bi-arrow-left'></i> Read less"; 
      craftsmoreText.style.display = "inline";
    }

}

function philanthropyFunction() {
    var philanthropydots = document.getElementById("philanthropydots");
    var philanthropymoreText = document.getElementById("philanthropymore");
    var philanthropybtnText = document.getElementById("philanthropymyBtn");
  
    if (philanthropydots.style.display === "none") {
      philanthropydots.style.display = "inline";
      philanthropybtnText.innerHTML = "Read more <i class='bi bi-arrow-right'></i>"; 
      philanthropymoreText.style.display = "none";
    } else {
      philanthropydots.style.display = "none";
      philanthropybtnText.innerHTML = "<i class='bi bi-arrow-left'></i> Read less"; 
      philanthropymoreText.style.display = "inline";
    }

}
