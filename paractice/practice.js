// // $(document).ready(function () {
// //   $("h1").click(function () {
// //     $("h1").hide(1000);
// //   });
// // });

// ////////////////////////////////
// // $(document).ready(function () {
// //   $("button").click(function () {
// //     $("img").hide(1000, function () {
// //       alert("hide completed");
// //     });
// //   });
// // });

// // ///////////////////////////
// // $(document).ready(function () {
// //   $("#a").show(1000, function () {
// //     $("#b").show(1000, function () {
// //       $("#c").show(1000);
// //     });
// // //   });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("#p").toggle(1000, function () {
//       $("#t").toggle(1000, function () {
//         $("#s").toggle(1000, function () {
//           if ($("button").html() === "Hide") {
//             $("button").html("Show");
//           } else {
//             $("button").html("Hide");
//           }
//         });
//       });
//     });
//   });
// });

// ///list of action event name :
// //1.hide
// //2.show
// //3.toggle
// //4.fadeIn
// //5.fadeOut
// //6.fadeToggle
// //7.fadeTo
// //8.slideUp
// //9.slideDown
// //10.slideToggle

// $(document).ready(function () {
//   $("button").click(function () {
//     $("img").fadeToggle(1000);
//   });
// });

/////////////////////////
// new code satrt here......
// list of selector
// 1. element selector
// $(document).ready(function () {
//   $("h1").hide(1000);
// });

// //2. id selector
// $(document).ready(function () {
//   $("#select-element-by-id,#test-work").hide(9000);
// });

// //3. class selector
// $(document).ready(function () {
//   $(".select-element-by-class,.test-work").hide(5000);
// });

// //4. nested selector
// $(document).ready(function () {
//   $("header #brand,#secound .brand2").hide(2000);
// });

// //5. attribute selector
// $(document).ready(function () {
//   $("[title=from]").hide(2000);
// });

//////////////////////
// /// css method single property
// $(document).ready(function () {
//   $("h1").css("color", "blue");
// });

// //2. more property use
// $(document).ready(function () {
//   $("h1").css({
//     color: "red",
//     "font-family": "sans-serif",
//   });
// });

// /////////////////
// // animation method
// $(document).ready(function () {
//   $("button").click(function () {
//     $(this).animate(
//       {
//         "font-size": "22px",
//         "border-radius": "20px",
//       },
//       800
//     );
//   });
// });

// $(document).ready(function () {
//   $("#bg").fadeIn(1000);
//   $("#modal").animate(
//     {
//       top: "120px",
//     },
//     1000
//   );
//   $("#bg").click(function () {
//     $("#modal").animate({ top: "-800px" }, 1000);
//     $(this).fadeOut(1000);
//   });
// });

// $(document).ready(function () {
//   $("h1").click(function () {
//     $("p").slideToggle();
//   });
// });

// $(document).ready(function () {
//   let a = $("h1").html();
//   alert(a);
// });

// jquery method
// 1. html() set or return the content of selected elements
// 2. val() set or return the value of form field and attributes
//3. attr() the query attr() method is used to get atribute value
// 4.setattr() the query setAttr() method is used to set atribute value

// $(document).ready(function () {
//   $("h1").html("Welcome to jQuery Tutorial");
// });

// $(document).ready(function () {
//   let a = $("h1").attr("align");
//   alert(a);
// });

// $(document).ready(function () {
//   $("body").attr("bgcolor", "red");
// });

// $(document).ready(function () {
//   $("h1").removeAttr("align");
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     let a = $("input").val();
//     alert(a);
//   });
// });

$(document).ready(function () {
  $("button").click(function () {
    $("h1").addClass("a");
  });
});
