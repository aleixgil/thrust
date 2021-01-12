function setupOrderedMultipleSelect(){
    dropdownOpenEvent();
    dropdownCloseEvent();
    sortableElement();
    clickToAddOptionEvent();
    clickToRemoveEvent();
    actualOptionsArrayEvent();
}

function updateNonSelectedOptions() {
    $('#nonSelectedOptions').children().each(function () {
        if ( $('#selectedOptions').find("[data-id="+$(this).attr('data-id')+"]").length ) {
            $(this).css('display', 'none');
        }
    });
}

function dropdownOpenEvent() {
    $(document).on("click", '#selectedOptions', function() {
        updateNonSelectedOptions()
        $("#nonSelectedOptions").slideDown("fast");
    });
}

function dropdownCloseEvent() {
    $(document).mouseup(function(e) {
        let selectedOptions = $('#selectedOptions'); let nonSelectedOptions = $('#nonSelectedOptions');
        if (!selectedOptions.is(e.target) && selectedOptions.has(e.target).length === 0
            && !nonSelectedOptions.is(e.target) && nonSelectedOptions.has(e.target).length === 0) {
            nonSelectedOptions.slideUp("fast");
        }
    });
}

function sortableElement() {
    $(document).ready(function () {
        $("#selectedOptions").sortable({
            containment: "#selectedOptions",
        })
        $("#selectedOptions").disableSelection();
    });
}

function insertOption(selectedOptionId, optionText, nonSelectedOptionId, dataId) {
    $('#selectedOptions').append('<span id="' + selectedOptionId + '" data-id="' + dataId + '"> <span style="cursor: move;" >' + optionText + '</span > <i id="rmOpt" class="fa fa-times rmOpt"></i>  </span>');
    $('#'+selectedOptionId).addClass('selectedOption');
    $('#'+nonSelectedOptionId).css('display', 'none');
}

function clickToAddOptionEvent() {
    $(document).on("click", '.nonSelectedOption', function(){
        let nonSelectedOptionId = this.id; let selectedOptionId = nonSelectedOptionId.replace('nonS','s'); let optionText = $(this).text(); let dataId = $(this).attr('data-id');
        if ( !$('#'+selectedOptionId).length ) {
            insertOption(selectedOptionId, optionText, nonSelectedOptionId, dataId);
        }
    });
}

function clickToRemoveEvent() {
    $(document).on("click", '#rmOpt', function() {
        let selectedOptionId = $(this).parent().attr("id"); let nOptId = selectedOptionId.replace('s','nonS'); let optTxt = $(this).closest("span").text();
        $('#'+selectedOptionId).remove();
        $('#'+nOptId).css('display', 'inline-block');
        return false;
    });
}

function actualOptionsArrayEvent() {
    $(document).on('DOMSubtreeModified', '#selectedOptions', function(){
        let actualOptions = [];
        $('#selectedOptions').children().each(function () {
            actualOptions.push($(this).attr('data-id'));
        });
        // console.log(JSON.stringify(actualOptions));
        $("[data-id=orderedMultipleSelectId]").attr('value', JSON.stringify(actualOptions));
    });
}
