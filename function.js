function zoomOnHover(img) {
    img.classList.add("picZoom");
    img.classList.remove("picSz");
}
function goBack() {}
function hideBox() {}

function unZoom(img) {
    img.classList.add("picSz");
    img.classList.remove("picZoom");
}

function swapDiv(genre) {
    var h1 = document.querySelector("#headerText");
    h1.innerHTML = `Where words fail, music speaks....`;
    var div = document.querySelector("#twoRow");
    if (genre == "pop") {
        div.innerHTML = ` <div class="newPageWhenClickedPop ">
        <div class="header">
            <h1>Pop Music</h1>
        </div>
        <div class="contentOfNewPage">
            <ol>
                <li>
                <a href="https://www.youtube.com/watch?v=tNxUxm3-658">Is it Over Now? - Taylor Swift</a>
                </li>
               
                <li>
                <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? - Jack Harlow</a> 
                </li>
                <li>
                <a href="https://www.youtube.com/watch?v=WHYMkKhOrE0"> Strong Enough(Feat. Baileu Zimmerman) - Jonas Brothers</a> 
                </li>
                <li>
                <a href="https://www.youtube.com/watch?v=8EBgZbpr0rI"> SORRY - Kid LAROI</a> 
                </li>
                <li>
                <a href="https://www.youtube.com/watch?v=uMCv9djEm1k"> Northern Attitude - Noah Khan & Hozier</a> 
                </li>
                <li>
                <a href="https://www.youtube.com/watch?v=Opxhh9Oh3rg"> Now and Then - The Beatles</a> 
                </li>
            </ol>
     
     
     
        </div>
     </div> `;
    } else if (genre == "country") {
        h1.innerHTML = `"Of emotions, of love, of breakup, of love and hate and death and dying, mama, apple pie, and the whole thing. It covers a lot of territory, country music does."- Johnny Cash`;
        div.innerHTML = ` <div class="newPageWhenClickedCountry">
    <div class="header">
        <h1>Country Music</h1>
    </div>
    <div class="contentOfNewPage">
        <ol>
            <li>
            <a href="https://www.youtube.com/watch?v=YvBqMts-ZKA"> More Then Whiskey Does - Mitchell Tenpenny</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Zyo6Dlx1Dbc"> Wildflowers and Wild Horses - Lainey Wilson</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=hA51HFVgGho"> What am I Gonna Do - Chris Stapleton</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
        </ol>
    </div>
 </div> `;
    } else if (genre == "Rock") {
        h1.innerHTML = `"If it's illegal to rock and roll, throw my ass in jail!"- Kurt Cobain`;
        div.innerHTML = ` <div class="newPageWhenClickedRock">
    <div class="header">
        <h1>Rock Music</h1>
    </div>
    <div class="contentOfNewPage">
        <ol>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
        </ol>
    </div>
 </div> `;
    } else if (genre == "R&B") {
        h1.innerHTML = `"It was very interesting in my world, because I grew up as a fan and I did not know that there was a thing called R&B, pop, country, classical - I just knew that I loved music." - Lionel Richie`;
        div.innerHTML = ` <div class="newPageWhenClickedRnB">
    <div class="header">
        <h1>R&B Music </h1>
    </div>
    <div class="contentOfNewPage">
        <ol>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
        </ol>
    </div>
 </div> `;
    } else if (genre == "classical") {
        h1.innerHTML = `"I know that the most joy in my life has come to me from my violin." - Albert Einstein`;
        div.innerHTML = ` <div class="newPageWhenClickedClassical">
    <div class="header">
        <h1> Classical Music</h1>
    </div>
    <div class="contentOfNewPage">
        <ol>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
        </ol>
    </div>
 </div> `;
    } else if (genre == "hipHop") {
        h1.innerHTML = `" Personally, I just think rap music is the best thing out there, period. If you look at my deck in my car radio, you're always going to find a hip-hop tape; thats all i buy, thats all i live, thats all i listen to, thats all i love " - Eminem`;
        div.innerHTML = ` <div class="newPageWhenClickedHipHop">
    <div class="header">
        <h1>Hip Hop Music</h1>
    </div>
    <div class="contentOfNewPage">
        <ol>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
        </ol>
    </div>
 </div> `;
    } else if (genre == "jazz") {
        h1.innerHTML = `" If you have to ask what jazz is, you'll never know." - Louis Armstrong`;
        div.innerHTML = ` <div class="newPageWhenClickedJazz">
    <div class="header">
        <h1>Jazz Music</h1>
    </div>
    <div class="contentOfNewPage">
        <ol>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
            <li>
            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
            </li>
        </ol>
    </div>
 </div> `;
    } else {
        h1.innerHTML = `" Electronic music is innately tied to the technology used to create it - as the tools evolve, so will the art." - Richie Hawtin`;
        div.innerHTML = ` <div class="newPageWhenClickedEdm">
             <div class="header">
                <h1>Electronic Dance Music</h1>
            </div>
                <div class="contentOfNewPage">
                    <ol>
                         <li>
                             <a href="https://www.youtube.com/watch?v=f2eBX5Z8wsA"> U taste like Sundays - Laszewo </a> 
                        </li>
                         <li>
                             <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
                         <li>
                            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
                         </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
                         </li>
                         <li>
                            <a href="https://www.youtube.com/watch?v=Iq8h3GEe22o"> Lovin On Me? --- Jack Harlow</a> 
                         </li>
                         </ol>
    </div>
    </div> `;
    }
}



// function swapDiv(genre) {
//     if (genre === "pop") {
//         window.location.href = "pop.html"; // Change "pop.html" to the actual URL of your pop genre page
//     } else if (genre === "country") {
//         window.location.href = "country.html"; // Change "country.html" to the actual URL of your country genre page
//     } else if (genre === "rock") {
//         window.location.href = "rock.html"; // Change "rock.html" to the actual URL of your rock genre page
//     } else if (genre === "R&B") {
//         window.location.href = "rnb.html"; // Change "rnb.html" to the actual URL of your R&B genre page
//     } else if (genre === "classical") {
//         window.location.href = "classical.html"; // Change "classical.html" to the actual URL of your classical genre page
//     } else if (genre === "hipHop") {
//         window.location.href = "hiphop.html"; // Change "hiphop.html" to the actual URL of your hip-hop genre page
//     } else if (genre === "jazz") {
//         window.location.href = "jazz.html"; // Change "jazz.html" to the actual URL of your jazz genre page
//     } else if (genre === "edm") {
//         window.location.href = "edm.html"; // Change "edm.html" to the actual URL of your EDM genre page
//     }
// }