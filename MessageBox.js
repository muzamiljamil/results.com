function pageLoad() {
    //alert("pageLoad");
    // Initialization code here, meant to run once. 
    $(document).ready(function () {
        
        setTimeout(function () {
            $("#ctl00_MsgBox_MessageContainer").fadeOut("slow", function () {
                $("#ctl00_MsgBox_MessageContainer").remove();
            });
        }, 90000);
        $('.closeImage').click(function () {
            $(this).parent().hide();
            alert("class close Image");
        });

        $('#MsgBox_CloseImage').click(function () {
            $(this).parent().hide();
            alert("ID close Image");
        });
    });
}

