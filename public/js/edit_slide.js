var admin = io("http://localhost:1900/edit-new-first");


const urlParams = new URLSearchParams(window.location.search);
const slide_link_share = urlParams.get('li');
const slide_id_from_link = urlParams.get('slide_id');
const folder_id_for_share = urlParams.get('folder_id');
const userid_for_share = urlParams.get('userid');


// 👐 For Open Ended Question  
var allowopenEndedQuestionCheck = false;


function allowOpenEndedQuestion() {

    allowopenEndedQuestionCheck = true;
    alert(allowopenEndedQuestionCheck);
    $('.MultipleChociceContent').css('display', 'none');
    $('.openEndedContent').css('display', 'block');
    
    // gt-edit-slide-main

    document.getElementsByClassName("canvaadd")[0].innerHTML=``;


}

function allowMultipelChoiceQuestion() {

    allowopenEndedQuestionCheck = false;

    $('.MultipleChociceContent').css('display', 'block');
    $('.openEndedContent').css('display', 'none');

    alert('allowopenEndedQuestionCheck');

}





admin.emit('joinroom', `${slide_link_share}${slide_id_from_link}${folder_id_for_share}${userid_for_share}`);


admin.on('geteachslidedata', function (data) {

    // 🔯  0️⃣  Only call when user select the Multipel Choice Question
    if (!allowopenEndedQuestionCheck) {
        m = data.slidedata;
        document.getElementById("usertext").innerText = typeof (data.rowsofquestion) !== 'undefined' && data.rowsofquestion.length > 0 ? data.rowsofquestion[0].q_detail : '';

        if (typeof (data.slidedata) !== 'undefined') {

            let myChart = document.getElementById('myChart').getContext('2d');

            // Global Options

            Chart.defaults.global.legend.display = false;
            arraylabel = [];
            arraydata = [];
            barcharttype = 'bar';


            //Here add the option in input



            m.map(dc => {
                console.log(dc);
                arraylabel.push(dc.optionname);
                arraydata.push(dc.vote);
            })


            document.getElementById("form-option-1").value = typeof (arraylabel[0]) !== "undefined" ? arraylabel[0] : "";
            document.getElementById("form-option-2").value = typeof (arraylabel[1]) !== "undefined" ? arraylabel[1] : "";
            document.getElementById("form-option-3").value = typeof (arraylabel[2]) !== "undefined" ? arraylabel[2] : "";


            massPopChart = new Chart(myChart, {

                type: barcharttype, // bar, horizontalBar, pie, line, doughnut, radar, polarArea

                data: {
                    labels: arraylabel,
                    datasets: [{

                        data: arraydata,
                        //backgroundColor:'green',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],
                        borderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#000'
                    }]
                },

                options: {
                    // title: {
                    //     display: true,
                    //     text: 'Largest Cities In Massachusetts',
                    //     fontSize: 25
                    // },

                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            },
                            barPercentage: 0.4,
                            ticks: {
                                //  display: false //this will remove only the label
                            }
                        }
                        ],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fixedStepSize: 1
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,

                            }
                        }],

                    },

                    layout: {
                        padding: {
                            left: 20,
                            right: 0,
                            bottom: 0,
                            top: 50
                        }
                    },
                    tooltips: {
                        enabled: true
                    }
                }
            });

        }
        massPopChart.update();
    }




});

admin.on('voteupdate', (data) => {
    arraydata[data] = arraydata[data] + 1;
    massPopChart.update();
})



// For save and load data 

admin.on('loaderstart', (data) => {
    document.getElementById("endsaving").style.display = "none";
    document.getElementById("saving").style.display = "block";
})

admin.on('loaderEnd', (data) => {
    document.getElementById("endsaving").style.display = "block";
    document.getElementById("saving").style.display = "none";
})



// Data attribute need to save the data 
selectedlideID = document.getElementById("selectedIdSlide").value;
currentUserId = userid_for_share;
currentFolderid = folder_id_for_share;



const myInput = document.getElementById('form5');


myInput.addEventListener('keyup', e => {
    admin.emit('newinput', e.target.value);
    document.getElementById("usertext").innerText = e.target.value;
});



// Allow User to Choose the Multipel Options

function checkOperation() {

    let sendDataForLiveWithMultipelParticipent = {
        id: document.getElementById("selectedIdSlide").value,
        slide_link_share: slide_link_share,
        participent: $('#sgtChooseParticipants').is(':checked')
    }
    if ($('#sgtChooseParticipants').is(':checked')) {
        $("#rangeselection").css('display', 'block');
    } else {
        $("#rangeselection").css('display', 'none');
    }

    admin.emit('AllowMultipelOption', sendDataForLiveWithMultipelParticipent);

}



// Multipel Choice Question Range

function checkOperationForRange() {
    document.getElementById("selectionrangevalue").innerText = document.getElementById("rangeselection").value;
    let sendDataForLiveWithMultipelParticipentRange = {
        id: document.getElementById("selectedIdSlide").value,
        slide_link_share: slide_link_share,
        participent: $('#sgtChooseParticipants').is(':checked'),
        selectionNumber: document.getElementById("rangeselection").value
    }
    admin.emit('AllowMultipelOptionRangeSelection', sendDataForLiveWithMultipelParticipentRange);

}


myInput.addEventListener('change', e => {


    if (e.target.value.length > 1) {
        let saveQuestion = {
            selectedlideID: document.getElementById("selectedIdSlide").value,
            question: document.getElementById("form5").value
        }
        admin.emit("pushdataforQuestion", saveQuestion);
        let sendDataForLive = {
            id: slide_id_from_link,
            slide_link_share: slide_link_share
        }
        admin.emit("updateLiveData", sendDataForLive);
    }

});






// function OnChangeInput(e) {
    

//     // alert(e.target.value);

//     console.log('e' ,e);
//     $('input[name="multipelchoiceOption[]"]').each(function (index, member) {
//         var value = $(member).val();
        
      

    
        
//     if (e.target.value.length > 1) {
//         arraylabel[index] = e.target.value;

//         let savemcqone = {
//             selectedlideID: document.getElementById("selectedIdSlide").value,
//             atindex: index,
//             currentUserId: currentUserId,
//             currentFolderid: currentFolderid,
//             valuesend: e.target.value,
//             slide_link_share: slide_link_share
//         }


//         admin.emit("savemcqone", savemcqone);
//         let sendDataForLive = {
//             id: document.getElementById("selectedIdSlide").value,
//             slide_link_share: slide_link_share
//         }

//         admin.emit("updateLiveData", sendDataForLive);
//     }


//           massPopChart.update();

        
//     });
    
// }


const myInput2 = document.getElementById('form-option-1');
myInput2.addEventListener('change', e => {


    if (e.target.value.length > 1) {
        arraylabel[0] = e.target.value;

        let savemcqone = {
            selectedlideID: document.getElementById("selectedIdSlide").value,
            atindex: 0,
            currentUserId: currentUserId,
            currentFolderid: currentFolderid,
            valuesend: e.target.value,
            slide_link_share: slide_link_share
        }


        admin.emit("savemcqone", savemcqone);
        let sendDataForLive = {
            id: document.getElementById("selectedIdSlide").value,
            slide_link_share: slide_link_share
        }

        admin.emit("updateLiveData", sendDataForLive);
    }

    // OnChangeInput();
    massPopChart.update();

  

});

const myInput3 = document.getElementById('form-option-2');
myInput3.addEventListener('change', e => {


    if (e.target.value.length > 1) {
        arraylabel[1] = e.target.value;
        let savemcqone = {
            selectedlideID: document.getElementById("selectedIdSlide").value,
            atindex: 1,
            currentUserId: currentUserId,
            currentFolderid: currentFolderid,
            valuesend: e.target.value,
            slide_link_share: slide_link_share
        }


        admin.emit("savemcqone", savemcqone);
        let sendDataForLive = {
            id: document.getElementById("selectedIdSlide").value,
            slide_link_share: slide_link_share
        }

        admin.emit("updateLiveData", sendDataForLive);
    }

    massPopChart.update();

});


const myInput4 = document.getElementById('form-option-3');
myInput4.addEventListener('change', e => {


    if (e.target.value.length > 1) {
        arraylabel[2] = e.target.value;

        let savemcqone = {
            selectedlideID: document.getElementById("selectedIdSlide").value,
            atindex: 2,
            currentUserId: currentUserId,
            currentFolderid: currentFolderid,
            valuesend: e.target.value,
            slide_link_share: slide_link_share
        }


        admin.emit("savemcqone", savemcqone);
        let sendDataForLive = {
            id: document.getElementById("selectedIdSlide").value,
            slide_link_share: slide_link_share
        }

        admin.emit("updateLiveData", sendDataForLive);
    }
    massPopChart.update();

});


// 🌝🌝
// 🌡️
// For Open Ended Save and get data  


// tb_id int(11) 
// share varchar(255) 
// user_id varchar(255) 
// folder_id varchar(255) 
// slide_id varchar(255) 
// optionname varchar(255) 
// optiondetail varchar(500)

const open_ended_question = document.getElementById('open_ended_question');
open_ended_question.addEventListener('change', e => {


    if (e.target.value.length > 1) {
        let saveQuestion = {
            selectedlideID: document.getElementById("selectedIdSlide").value,
            question: document.getElementById("open_ended_question").value,
            type:"openended"
        }
        admin.emit("pushdataforQuestion", saveQuestion);

        let sendDataForLive = {
            id: slide_id_from_link,
            slide_link_share: slide_link_share
        }
        admin.emit("updateLiveData", sendDataForLive);

    }

});


// Now we are moving to the option 






const open_ended_one = document.getElementById('form-option-open-ended-one-customselect');
open_ended_one.addEventListener('change', e => {


    if (e.target.value.length > 1) {
        let saveQuestion = {
            selectedlideID: document.getElementById("selectedIdSlide").value,
            question: document.getElementById("form-option-open-ended-one-customselect").value,
            type:"openended"
        }
        admin.emit("pushdataforQuestion", saveQuestion);

        let sendDataForLive = {
            id: slide_id_from_link,
            slide_link_share: slide_link_share
        }
        admin.emit("updateLiveData", sendDataForLive);

    }

});


const myInput4 = document.getElementById('form-option-3');
myInput4.addEventListener('change', e => {


    if (e.target.value.length > 1) {
        arraylabel[2] = e.target.value;

        let savemcqone = {
            selectedlideID: document.getElementById("selectedIdSlide").value,
            atindex: 2,
            currentUserId: currentUserId,
            currentFolderid: currentFolderid,
            valuesend: e.target.value,
            slide_link_share: slide_link_share
        }


        admin.emit("savemcqone", savemcqone);
        let sendDataForLive = {
            id: document.getElementById("selectedIdSlide").value,
            slide_link_share: slide_link_share
        }

        admin.emit("updateLiveData", sendDataForLive);
    }
    massPopChart.update();

});






const candidates = [];
const btnsave = document.getElementById('saveandshare');

btnsave.addEventListener('click', e => {

    // alert(document.getElementById("selectedIdSlide").value);

    // admin.emit("getsharelink",document.getElementById("selectedIdSlide").value);

    document.getElementById("linkdata").value = `http://localhost:1900/audience/${slide_link_share}`;
    arraylabel.map((d, i) => {
        arraydata[i] = 0;
    })
    // arraylabel.push(e.target.value);


    //  alert(document.getElementById("selectedIdSlide").value);


    let senddataforslidesave = {
        arraylabel,
        selectedlideID,
        currentUserId,
        currentFolderid,
        question: document.getElementById("form5").value
    }


    //  admin.emit("pushdata",senddataforslidesave);


});



//             // Initialize candidates
// const candidates = [
//     { votes: 0, label: "JavaScript", color: "#F38548" },
//     { votes: 0, label: "C#", color: "#39ABCE" },
//     { votes: 0, label: "Python", color: "#CA3F45" } ,

// ];

function hideandshow() {

    $("#leftSide").css("display", "none");
    $("#mySidenav").css("display", "none");
    $(".sgt-settings-section").css("display", "none");
    $(".sgt-inner-header").css("display", "none");
    document.getElementsByClassName("sgt-edit-slide-section")[0].style.height = 100 + 'vh';
    $('#sgt-edit-slide-main').removeClass('minClass');
    $("#sgt-edit-slide-main").addClass('maxClass');
}

let count = 1;
function appenddata(id) {

    document.getElementById("sortable4").innerHTML += `<li class="list-group-item " onclick="slidenumber(${id})">
        <div class="sgt-slide-thumbnail">
            <div class="sgt-st-options">
                <p>${count}</p>
                <div class="sgt-on-hover">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" height="16px" width="16px" class="r-svg"><g color="rgb(183, 186, 194)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle r="1" cx="7.5" cy="2.5"></circle><circle r="1" cx="16.5" cy="2.5"></circle><circle r="1" cx="7.5" cy="12"></circle><circle r="1" cx="16.5" cy="12"></circle><circle r="1" cx="7.5" cy="21.5"></circle><circle r="1" cx="16.5" cy="21.5"></circle></g></g></svg>
                </div>
                <a class="sgt-on-hover">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" height="20px" width="20px" class="r-svg"><g color="#101834"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></g></svg>
                </a>
            </div>
            <div class="sgt-thumbnail"  style="    display: flex;
                    justify-content: center;
                    flex-direction: column;" >
                <p style="font-size: 80%;text-align: left;
                padding-left: 10px;" id="slide_${id}"></p>
                
                <svg viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" height="32px" width="32px" class="r-svg"><title>Bar Chart Icon</title><rect x="32.73" y="17.04" width="11.4" height="25.25" fill="rgb(231, 232, 235)"></rect><rect x="3.87" y="26.22" width="11.4" height="16.06" fill="rgb(64, 70, 93)"></rect><rect x="18.3" y="4.31" width="11.4" height="37.97" fill="rgb(183, 186, 194)"></rect><rect y="42.28" width="48" height=".99" fill="#000000"></rect></svg>
            </div>
        </div>
    </li>`;
    admin.emit("getEachSlideQuestion", id);
    // if (presentMode==="True" && count==1 ) {
    //     // alert(count);
    //     slidenumber(1);
    //     hideandshow();
    // }

    // if (count==1 ) {
    //     // alert(count);
    //     slidenumber(1);

    // }
    count++;
}


function appenddataappenddata() {

    //  alert('asdas');
    let currentUserId = userid_for_share;
    let currentFolderid = folder_id_for_share;

    const urlParams = new URLSearchParams(window.location.search);
    const slide_id = urlParams.get('slide_id');


    //  alert(currentFolderid+currentUserId);
    let datasendforslidecreate = {
        currentUserId,
        currentFolderid,
        slide_id
    }


    //alert('slide_id    '+slide_id);
    admin.emit('addnewslide', datasendforslidecreate);

    admin.once('newCreatedSlideId', function (m) {

        appenddata(m);
    });


}

admin.on('setEachSlideQuestion', (data) => {
    document.getElementById(`slide_${data[0].slide_id}`).innerText = data[0].q_detail.slice(0, 30).concat('..');
    document.getElementById("form5").value = data[0].q_detail;
});



function slidenumber(e) {

    admin.emit("getEachSlideQuestion", e);

    document.getElementById("form5").value = "";
    document.getElementById("form-option-1").value = "";
    document.getElementById("form-option-2").value = "";
    document.getElementById("form-option-3").value = "";
    // form-option-2
    //form-option-3
    document.getElementById("linkdata").value = "";

    let currentUserId = userid_for_share;
    let currentFolderid = folder_id_for_share;
    // arraylabel.push(e.target.value)

    let datasend = {
        e,
        currentUserId,
        currentFolderid
    }
    admin.emit("geteachslidedata", (datasend));



    let attachedslide = `<h4 id="usertext" style="width: 100%;text-align: center;padding:6px"></h4>
                             <canvas id="myChart">${e}</canvas>`;
    document.getElementById("sgt-edit-slide-main").innerHTML = attachedslide;
    let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options

    Chart.defaults.global.legend.display = false;
    arraylabel = [];
    arraydata = [];
    barcharttype = 'bar';





    massPopChart = new Chart(myChart, {
        type: barcharttype, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels: arraylabel,
            datasets: [{

                data: arraydata,
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
        },

        options: {
            // title: {
            //     display: true,
            //     text: 'Largest Cities In Massachusetts',
            //     fontSize: 25
            // },

            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    barPercentage: 0.4,
                    ticks: {
                        //  display: false //this will remove only the label
                    }
                }
                ],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fixedStepSize: 1
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,

                    }
                }],

            },

            layout: {
                padding: {
                    left: 20,
                    right: 0,
                    bottom: 0,
                    top: 50
                }
            },
            tooltips: {
                enabled: true
            }
        }
    });


    document.getElementById("selectedIdSlide").value = e;


    let sendDataForLive = {
        id: e,
        slide_link_share: slide_link_share
    }

    admin.emit("updateLiveData", sendDataForLive);

    // 
}

function changemodel() {

    barcharttype = "bar";
    updatefun(barcharttype);
    //  alert('updaed');
}
function changemodel2() {

    barcharttype = "doughnut";
    updatefun(barcharttype);
    //  alert('updaed');
}

function changemodel3() {

    barcharttype = "pie";
    updatefun(barcharttype);
    //  alert('updaed');
}

function changemodel4() {

    barcharttype = "line";
    updatefun(barcharttype);
    //  alert('updaed');
}
function updatefun(barcharttype) {
    massPopChart = new Chart(myChart, {

        type: barcharttype, // bar, horizontalBar, pie, line, doughnut, radar, polarArea

        data: {
            labels: arraylabel,
            datasets: [{

                data: arraydata,
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
        },

        options: {
            // title: {
            //     display: true,
            //     text: 'Largest Cities In Massachusetts',
            //     fontSize: 25
            // },

            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    barPercentage: 0.4,
                    ticks: {
                        //  display: false //this will remove only the label
                    }
                }
                ],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fixedStepSize: 1
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,

                    }
                }],

            },

            layout: {
                padding: {
                    left: 20,
                    right: 0,
                    bottom: 0,
                    top: 50
                }
            },
            tooltips: {
                enabled: true
            }
        }
    });
    massPopChart.update();
}





