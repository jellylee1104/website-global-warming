// var pic1 = "https://img1.etsystatic.com/198/1/17027252/il_340x270.1485232995_a24s.jpg";
// var pic2 = "https://img0.etsystatic.com/197/0/16034376/il_340x270.1323341952_95dy.jpg";
// var pic3 = "https://img0.etsystatic.com/174/1/11862126/il_340x270.1168388706_cr09.jpg";
// var pic4 = "https://img1.etsystatic.com/202/0/9022352/il_340x270.1271158443_9sah.jpg";
//
//
// var pictures = [pic1, pic2, pic3, pic4];
//
// function Generator() {
//     var randomImg = Math.floor(Math.random() * pictures.length);
//     gold.src = pictures[randomImg];
//       document.getElementById("gold").style.boxShadow = "5px 10px 15px black";
// }
//
// // var ans = document.getElementById("ans");
//
// function submit(){
//   if ( document.getElementById("gold") === "https://images.unsplash.com/photo-1536096347608-f2d054f64a17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" ) {
//     if (ans === "Burning coal") {
//       document.getElementById("ans").innerHTML = "right answer";
//     }else {
//       document.getElementById("ans").innerHTML = "wrong answer";
//     }
//   }
//     if ( document.getElementById("gold") === "https://img1.etsystatic.com/198/1/17027252/il_340x270.1485232995_a24s.jpg" ) {
//       if (ans === "Burning coal") {
//         document.getElementById("ans").innerHTML = "right answer";
//       }else {
//         document.getElementById("ans").innerHTML = "wrong answer";
//       }
//     }
//
//       if ( document.getElementById("gold") === "https://img0.etsystatic.com/197/0/16034376/il_340x270.1323341952_95dy.jpg" ) {
//         if (ans === "Burning coal") {
//           document.getElementById("ans").innerHTML = "right answer";
//         }else {
//           document.getElementById("ans").innerHTML = "wrong answer";
//         }
//       }
//
//         if ( document.getElementById("gold") === "https://img0.etsystatic.com/174/1/11862126/il_340x270.1168388706_cr09.jpg" ) {
//           if (ans === "Burning coal") {
//             document.getElementById("ans").innerHTML = "right answer";
//           }else {
//             document.getElementById("ans").innerHTML = "wrong answer";
//           }
//         }
//
//           if ( document.getElementById("gold") === "https://img1.etsystatic.com/202/0/9022352/il_340x270.1271158443_9sah.jpg" ) {
//             if (ans === "Burning coal") {
//               document.getElementById("ans").innerHTML = "right answer";
//             }else {
//               document.getElementById("ans").innerHTML = "wrong answer";
//             }
//           }
// }


var pic5 = "https://images.unsplash.com/photo-1536096347608-f2d054f64a17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
var pic1 = "https://cdn.newsapi.com.au/image/v1/b835a9a3b2d8f1b62ea45f02676d1fa8";
var pic2 = "https://bsmedia.business-standard.com/_media/bs/img/article/2019-06/27/full/1561658764-3817.jpg";
var pic3 = "https://www.umweltbundesamt.de/sites/default/files/medien/378/bilder/deponie_airart_fotolia_33491092_m.jpg";
var pic4 = "https://scx1.b-cdn.net/csz/news/800/2016/burningfossi.jpg";


var pictures = [pic1, pic2, pic3, pic4, pic5];

function Generator() {
    var randomImg = Math.floor(Math.random() * pictures.length);
    gold.src = pictures[randomImg];
    document.getElementById("gold").style.boxShadow = "5px 10px 15px black";
}

    var ans = document.getElementsByClassName("answers").innerHTML;
var anpic5 = document.getElementById("anpic5").innerHTML;
var anpic1 = document.getElementById("anpic1").innerHTML;
var anpic2 = document.getElementById("anpic2").innerHTML;
var anpic3 = document.getElementById("anpic3").innerHTML;
var anpic4 = document.getElementById("anpic4").innerHTML;

function submit() {
    if (pictures == pic5) {
 if (ans == anpic5) {
       document.getElementById("check").innerHTML = "wrong answer";
        } else  {
             document.getElementById("check").innerHTML = "right answer";
        }
    }
   else if (pictures == pic1) {
        if (ans == anpic1) {
 document.getElementById("check").innerHTML = "wrong answer";
        } else {
            document.getElementById("check").innerHTML = "right answer";
        }
    }

   else if (pictures == pic2) {
        if (ans == anpic2) {
 document.getElementById("check").innerHTML = "wrong answer";
        } else {
            document.getElementById("check").innerHTML = "right answer";
        }
    }

   else if (pictures == pic3) {
      if (ans == anpic3) {
 document.getElementById("check").innerHTML = "wrong answer";
        } else {
            document.getElementById("check").innerHTML = "right answer";
        }
    }

    else {
 if (ans == anpic4) {
 document.getElementById("check").innerHTML = "wrong answer";
        } else {
            document.getElementById("check").innerHTML = "right answer";
        }
    }
}
