/* =========================================================
   LearnSphere - jQuery Code
   ========================================================= */

$(document).ready(function () {

  /* ---------------------------------------------------------
     1. DATA: details for each course (used by the modal)
     --------------------------------------------------------- */
  var instructors = {
    aarav: { name: "Aarav Sharma", role: "Web Development", img: "https://i.pravatar.cc/300?img=12",
             bio: "Full-stack developer with 10 years of experience building scalable web apps." },
    priya: { name: "Priya Verma", role: "Data Science & ML", img: "https://i.pravatar.cc/300?img=47",
             bio: "Data scientist who loves turning messy data into clear, useful insights." },
    neha:  { name: "Neha Kapoor", role: "UI/UX Design", img: "https://i.pravatar.cc/300?img=32",
             bio: "Product designer focused on simple, accessible and user-friendly interfaces." },
    rohan: { name: "Rohan Mehta", role: "Graphic Design", img: "https://i.pravatar.cc/300?img=15",
             bio: "Brand designer who has helped over 100 startups create their visual identity." }
  };

  var courses = {
    "web-bootcamp": {
      title: "Modern Web Development Bootcamp", img: "https://picsum.photos/seed/webdev/600/400",
      duration: "12 Weeks", fee: "₹4,999", rating: "4.8 / 5", instructor: "aarav",
      desc: "Go from zero to job-ready. Build responsive websites using HTML, CSS, JavaScript and Bootstrap, then deploy your own projects.",
      modules: [
        { title: "Module 1: HTML5 Basics", lessons: ["Page structure", "Semantic tags", "Forms and tables"] },
        { title: "Module 2: CSS3 & Layouts", lessons: ["Selectors and the box model", "Flexbox", "CSS Grid"] },
        { title: "Module 3: JavaScript & jQuery", lessons: ["Variables and functions", "DOM manipulation", "Events and effects"] },
        { title: "Module 4: Final Project", lessons: ["Planning", "Building", "Deployment"] }
      ]
    },
    "react-mastery": {
      title: "React & Front-End Mastery", img: "https://picsum.photos/seed/reactjs/600/400",
      duration: "8 Weeks", fee: "₹3,999", rating: "4.7 / 5", instructor: "aarav",
      desc: "Learn to build fast, modern user interfaces with React. Covers components, state, routing and API calls.",
      modules: [
        { title: "Module 1: React Fundamentals", lessons: ["JSX", "Components and props"] },
        { title: "Module 2: State & Hooks", lessons: ["useState", "useEffect", "Custom hooks"] },
        { title: "Module 3: Routing & APIs", lessons: ["React Router", "Fetching data"] }
      ]
    },
    "python-ds": {
      title: "Python for Data Science", img: "https://picsum.photos/seed/python/600/400",
      duration: "10 Weeks", fee: "₹5,499", rating: "4.9 / 5", instructor: "priya",
      desc: "Learn Python and the essential data libraries. Clean, analyse and visualise real-world datasets.",
      modules: [
        { title: "Module 1: Python Basics", lessons: ["Syntax", "Loops and functions", "Data structures"] },
        { title: "Module 2: NumPy & Pandas", lessons: ["Arrays", "DataFrames", "Data cleaning"] },
        { title: "Module 3: Data Visualisation", lessons: ["Matplotlib", "Seaborn", "Dashboards"] }
      ]
    },
    "ml-foundations": {
      title: "Machine Learning Foundations", img: "https://picsum.photos/seed/machinelearning/600/400",
      duration: "14 Weeks", fee: "₹6,999", rating: "4.6 / 5", instructor: "priya",
      desc: "Understand how machines learn. Build and evaluate regression, classification and clustering models.",
      modules: [
        { title: "Module 1: ML Concepts", lessons: ["Supervised vs unsupervised", "Train/test split"] },
        { title: "Module 2: Core Algorithms", lessons: ["Linear regression", "Decision trees", "k-Means"] },
        { title: "Module 3: Model Evaluation", lessons: ["Accuracy and metrics", "Overfitting"] }
      ]
    },
    "uiux": {
      title: "UI/UX Design Essentials", img: "https://picsum.photos/seed/uiuxdesign/600/400",
      duration: "6 Weeks", fee: "₹3,499", rating: "4.8 / 5", instructor: "neha",
      desc: "Learn the design process from user research to polished prototypes using modern design tools.",
      modules: [
        { title: "Module 1: UX Research", lessons: ["User personas", "Journey maps"] },
        { title: "Module 2: Wireframing", lessons: ["Low-fidelity sketches", "Layout principles"] },
        { title: "Module 3: UI & Prototyping", lessons: ["Colour and typography", "Interactive prototypes"] }
      ]
    },
    "graphic": {
      title: "Graphic Design & Branding", img: "https://picsum.photos/seed/graphicdesign/600/400",
      duration: "8 Weeks", fee: "₹2,999", rating: "4.5 / 5", instructor: "rohan",
      desc: "Create eye-catching visuals and build a complete brand identity, from logos to social media graphics.",
      modules: [
        { title: "Module 1: Design Principles", lessons: ["Colour theory", "Typography", "Composition"] },
        { title: "Module 2: Logo Design", lessons: ["Sketching ideas", "Vector tools"] },
        { title: "Module 3: Brand Identity", lessons: ["Style guides", "Marketing assets"] }
      ]
    }
  };

  var currentCourseId = "";   // remembers which course is open in the modal


  /* ---------------------------------------------------------
     2. SEARCH + CATEGORY FILTER
     --------------------------------------------------------- */
  var activeCategory = "All";

  function filterCourses() {
    var searchText = $("#courseSearch").val().toLowerCase().trim();
    var visibleCount = 0;

    $(".course-card").each(function () {
      var $card = $(this);
      var category = $card.data("category");
      var title = String($card.data("title")).toLowerCase();

      var matchCategory = (activeCategory === "All" || category === activeCategory);
      var matchSearch = title.indexOf(searchText) !== -1 ||
                        category.toLowerCase().indexOf(searchText) !== -1;

      if (matchCategory && matchSearch) {
        $card.stop(true, true).fadeIn(300);
        visibleCount++;
      } else {
        $card.stop(true, true).fadeOut(200);
      }
    });

    $("#resultCount").text("Showing " + visibleCount + " course" + (visibleCount === 1 ? "" : "s"));
    $("#noResults").toggle(visibleCount === 0);
  }

  // Category buttons
  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
    activeCategory = $(this).data("filter");
    filterCourses();
  });

  // Live search while typing
  $("#courseSearch").on("keyup input", filterCourses);

  filterCourses(); // run once on page load


  /* ---------------------------------------------------------
     3. CARD CLICK ANIMATION
     --------------------------------------------------------- */
  $(".course-card").on("click", function () {
    var $card = $(this);
    $card.addClass("pulse");
    setTimeout(function () { $card.removeClass("pulse"); }, 350);
  });


  /* ---------------------------------------------------------
     4. COURSE DETAILS MODAL
     --------------------------------------------------------- */
  $(".btn-details").on("click", function (e) {
    e.stopPropagation();
    var id = $(this).closest(".course-card").data("id");
    var c = courses[id];
    var inst = instructors[c.instructor];
    currentCourseId = id;

    // Fill in the modal content
    $("#modalTitle").text(c.title);
    $("#modalImage").attr({ src: c.img, alt: c.title });
    $("#modalDuration").text(c.duration);
    $("#modalFee").text(c.fee);
    $("#modalRating").text(c.rating);
    $("#modalDesc").text(c.desc);
    $("#modalInstImg").attr({ src: inst.img, alt: inst.name });
    $("#modalInstName").text(inst.name);
    $("#modalInstRole").text(inst.role);
    $("#modalInstBio").text(inst.bio);

    // Build the modules list
    var $list = $("#modalModules").empty();
    $.each(c.modules, function (i, m) {
      var lessonsHtml = "";
      $.each(m.lessons, function (j, lesson) {
        lessonsHtml += "<li><i class='bi bi-check-circle'></i> " + lesson + "</li>";
      });

      var $item = $(
        "<li class='module-item'>" +
          "<button type='button' class='module-toggle'>" + m.title +
          " <i class='bi bi-chevron-down'></i></button>" +
          "<div class='module-body'><ul class='list-unstyled'>" + lessonsHtml + "</ul></div>" +
        "</li>"
      );
      $list.append($item);
    });

    bootstrap.Modal.getOrCreateInstance($("#courseModal")[0]).show();
  });

  // Show / hide module lessons with a slide effect
  // (delegated, because the modules are created dynamically)
  $("#modalModules").on("click", ".module-toggle", function () {
    $(this).toggleClass("open");
    $(this).next(".module-body").slideToggle(300);
  });

  // "Enroll" button inside the modal
  $("#enrollFromModal").on("click", function () {
    bootstrap.Modal.getOrCreateInstance($("#courseModal")[0]).hide();
    $("#course").val(currentCourseId);
    clearError($("#course"));
    scrollToTarget("#register");
  });


  /* ---------------------------------------------------------
     5. SMOOTH SCROLLING
     --------------------------------------------------------- */
  function scrollToTarget(target) {
    var $target = $(target);
    if ($target.length) {
      var offset = $(".navbar").outerHeight() || 0;
      $("html, body").stop().animate({ scrollTop: $target.offset().top - offset + 1 }, 700);
    }
  }

  $('a[href^="#"]').on("click", function (e) {
    var target = $(this).attr("href");
    if (target.length > 1 && $(target).length) {
      e.preventDefault();
      scrollToTarget(target);

      // Close the mobile menu after clicking a link
      var $menu = $("#mainNav");
      if ($menu.hasClass("show")) {
        bootstrap.Collapse.getOrCreateInstance($menu[0]).hide();
      }
    }
  });


  /* ---------------------------------------------------------
     6. BACK TO TOP BUTTON
     --------------------------------------------------------- */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTop").fadeIn(300);
    } else {
      $("#backToTop").fadeOut(300);
    }
  });

  $("#backToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
  });


  /* ---------------------------------------------------------
     7. BUTTON CLICK ANIMATION (small "press" effect)
     --------------------------------------------------------- */
  $(".btn").on("mousedown", function () {
    $(this).animate({ opacity: 0.8 }, 80);
  }).on("mouseup mouseleave", function () {
    $(this).animate({ opacity: 1 }, 80);
  });

  // Instructor cards: little bounce on click
  $(".instructor-card").on("click", function () {
    $(this).animate({ marginTop: "-10px" }, 150)
           .animate({ marginTop: "0px" }, 150);
  });


  /* ---------------------------------------------------------
     8. FORM VALIDATION
     --------------------------------------------------------- */
  function showError($field, message) {
    $field.removeClass("field-ok").addClass("field-error");
    $("#" + $field.attr("id") + "-error").text("⚠ " + message).hide().fadeIn(200);
  }

  function clearError($field) {
    $field.removeClass("field-error").addClass("field-ok");
    $("#" + $field.attr("id") + "-error").text("");
  }

  // Each validator returns true if the field is valid
  var validators = {
    fullName: function () {
      var $f = $("#fullName");
      var value = $.trim($f.val());
      if (value === "") { showError($f, "Full name is required."); return false; }
      if (value.length < 3) { showError($f, "Name must be at least 3 characters."); return false; }
      if (!/^[A-Za-z\s.'-]+$/.test(value)) { showError($f, "Name can contain letters only."); return false; }
      clearError($f); return true;
    },
    email: function () {
      var $f = $("#email");
      var value = $.trim($f.val());
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (value === "") { showError($f, "Email is required."); return false; }
      if (!pattern.test(value)) { showError($f, "Enter a valid email address."); return false; }
      clearError($f); return true;
    },
    phone: function () {
      var $f = $("#phone");
      var value = $.trim($f.val()).replace(/[\s-]/g, "");
      if (value === "") { showError($f, "Phone number is required."); return false; }
      if (!/^\d{10}$/.test(value)) { showError($f, "Enter a valid 10-digit phone number."); return false; }
      clearError($f); return true;
    },
    course: function () {
      var $f = $("#course");
      if ($f.val() === "") { showError($f, "Please select a course."); return false; }
      clearError($f); return true;
    },
    terms: function () {
      var $f = $("#terms");
      if (!$f.is(":checked")) { showError($f, "You must accept the terms."); return false; }
      clearError($f); return true;
    }
  };

  // Real-time validation: when typing, leaving a field, or changing a value
  $("#fullName").on("input blur", validators.fullName);
  $("#email").on("input blur", validators.email);
  $("#phone").on("input blur", validators.phone);
  $("#course").on("change blur", validators.course);
  $("#terms").on("change", validators.terms);

  // On submit: check every field
  $("#registerForm").on("submit", function (e) {
    e.preventDefault();

    // Run all validators (don't stop at the first failure)
    var results = [
      validators.fullName(),
      validators.email(),
      validators.phone(),
      validators.course(),
      validators.terms()
    ];
    var allValid = results.every(function (r) { return r === true; });

    if (allValid) {
      var name = $.trim($("#fullName").val());
      var courseName = $("#course option:selected").text();

      $("#formSuccess")
        .html("<i class='bi bi-check-circle-fill'></i> Thank you, " + $("<div>").text(name).html() +
              "! You have successfully registered for <em>" + courseName + "</em>.")
        .slideDown(400);

      // Reset the form and remove validation styles
      this.reset();
      $("#registerForm .form-control, #registerForm .form-select, #terms")
        .removeClass("field-ok field-error");
      $(".error-msg").text("");

      // Hide the success message after a few seconds
      setTimeout(function () { $("#formSuccess").slideUp(400); }, 6000);
    } else {
      // Focus the first invalid field
      $(".field-error").first().focus();
    }
  });

});