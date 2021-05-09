// Show/Hide text
$('.sgt-st-input-counter').hide();

$('.sgt-inpt-counter').focus(function() {
    mxLength = $(this).attr('maxlength');
    $(this).parent().find('.sgt-st-input-counter').show();
});

$('.sgt-inpt-counter').blur(function() {
    $(this).parent().find('.sgt-st-input-counter').hide();
});
// Show/Hide text

//Show counter limit
$('.sgt-inpt-counter').keyup(function() {
    if (this.value.length > mxLength) {
        return false;
    }
    $(this).parent().find('.sgt-st-input-counter').html((mxLength - this.value.length));
});
//Show counter limit

$(document).ready(function() {
    var $tableBody = $('#sgtOptionBody');
    //var $menu = $('#menu');
    $(document).on('click', '.sgt-option_add-row-btn', function(e) {
        alert('new add');
        var $el = $(e.currentTarget);
        var htmlString = $('#rowTemplate').html();
        $tableBody.append(htmlString);
        return false;
    });

    $tableBody.on('click', '.sgt-option_del-row-btn', function(e) {
        var $el = $(e.currentTarget);
        var $row = $el.closest('.sgt-input-limit');
        $row.remove();
        return false;
    });
    Sortable.create(
        $tableBody[0], {
            animation: 150,
            scroll: true,
            handle: '.drag-handler'
        }
    );

});

function readUrl(input) {

    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            let imgData = e.target.result;
            let imgName = input.files[0].name;
            input.setAttribute("data-title", imgName);
            console.log(e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }

}

$(document).ready(function() {
    $('[data-mdb-toggle="collapse"]').click(function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).text("Close");
        } else {
            $(this).text("Expand");
        }
    });
    // document ready  
});

$(".toolsDrawer").click(function() {

    // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = $("#mySidenav").toggleClass("col-4 w-0");
    var options2 = $('#edit-canvas').toggleClass("col-6 col-10");
    var options3 = $('.toolsDrawer i').toggleClass("fa-chevron-left fa-chevron-right");


    $('#edit-canvas').toggle(effect, options2);
    $('#mySidenav').toggle(effect, options);
    $('.toolsDrawer i').toggle(effect, options3);
});

$("#add-lg-desc").click(function() {
    $(".add-long-des").toggle(500);
    //$("#add-lg-desc").css('display', 'none');
});
$(".sgt-ce-edit-itext").click(function() {
    $(".sgt-ce-edit").toggle(500);
    $(".sgt-ce-edit-itext i").toggleClass("fa-pencil-alt fa-times");
    //$("#add-lg-desc").css('display', 'none');
});