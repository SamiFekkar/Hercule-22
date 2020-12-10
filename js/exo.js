var hercule = {
  profil: {
    name: "Hercule",
    job: "Demi-dieu",
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
  },
  friend: ["Jupiter", "Junon", "Alcmène", "Déjanire"],
  init: function () {
    base.fillProfil(hercule.profil);
    base.printFriends(hercule.friend);
    base.setBestFriend(hercule.friend[0]);
    hercule.initElement();
    hercule.workElement();
    hercule.disponibilyElement();
    hercule.pseudoGenerator();
    hercule.menuToggler();
    hercule.contactDisturb();
    hercule.trendsElement();
    hercule.activities();
  },
  initElement: function () {
    var headerBannerElement = document.getElementById("header-banner");
    var h1Element = document.createElement("h1");
    h1Element.setAttribute("class", "banner__title");
    h1Element.innerHTML = "Vous consultez le profil de Hercule";
    headerBannerElement.appendChild(h1Element);
  },
  workElement: function () {
    for (let i = 0; i < 12; i++) {
      base.displayWork(i);
    }
  },
  disponibilyElement: function () {
    if (base.getHour() >= 8 && base.getHour() <= 20) {
      document.getElementById("availability").innerHTML = "Disponible";
    } else {
      document.getElementById("availability").innerHTML = "Non disponible";
      document.getElementById("availability").className = "off";
    }
  },
  pseudoGenerator: function () {
    function generateFirstName(name, department) {
      return (name = name + "-du-" + department);
    }
    generateFirstName(hercule.profil.name, hercule.profil.department);
    document.getElementById("profil-name").innerHTML = generateFirstName(
      hercule.profil.name,
      hercule.profil.department
    );
  },
  menuToggler: function () {
    document
      .getElementById("menu-toggler")
      .addEventListener("click", function () {
        if (
          document
            .getElementById("header-banner")
            .classList.contains("banner--open")
        ) {
          document
            .getElementById("header-banner")
            .classList.remove("banner--open");
        } else {
          document
            .getElementById("header-banner")
            .classList.add("banner--open");
        }
      });
  },
  contactDisturb: function () {
    document
      .getElementById("contact")
      .addEventListener("click", function (event) {
        event.preventDefault();
        alert("Hercule ne souhaite pas être dérangé");
      });
  },
  trendsElement: function () {
    var trendsHercule = Math.round(
      (base.vote.hercule / (base.vote.hercule + base.vote.cesar)) * 100
    );
    var trendsCesar = Math.round(
      (base.vote.cesar / (base.vote.hercule + base.vote.cesar)) * 100
    );
    document
      .getElementById("trends-hercule")
      .querySelector(".people__popularity").innerHTML = trendsHercule + "%";
    document
      .getElementById("trends-hercule")
      .querySelector(".people__bar").style.width = trendsHercule + "%";
    document
      .getElementById("trends-cesar")
      .querySelector(".people__popularity").innerHTML = trendsCesar + "%";
    document
      .getElementById("trends-cesar")
      .querySelector(".people__bar").style.width = trendsCesar + "%";
  },
  activities: function () {
    document.getElementById("activities").classList.remove("hidden");
    tasks = [];
    for (let i = 0; i < base.activities.length; i++) {
      console.log(
        "base.activities[" + i + "].finished:",
        base.activities[i].title,
        base.activities[i].finished
      );
      if (
        base.activities[i].finished &&
        base.activities[i].author === "Hercule"
      ) {
        var activitiesElement = document.getElementById("activities");
        activitiesElement.classList.remove("hidden");
        var liElement = document.createElement("li");
        activitiesElement.appendChild(liElement);
        tasks.push(" " + base.activities[i].title);
        liElement.classList.add("tasks__item", "tasks__info");

        liElement.innerHTML = tasks;
      }
    }
  },
};

document.addEventListener("DOMContentLoaded", hercule.init);
