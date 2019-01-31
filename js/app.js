// main document ready function to check if dom is loaded fully or not
$(document).ready(function () {

    var myFacebookToken = 'EAAMZA8Y0oo4EBAOMD7eI00ZAZAWrCyaw3c0IZBFynM0i3ExBoBZClOVrUrxpW5Th3OcGAZCqXJlj3wYbtMAhmjPWSphntoCxnZCwlU7XPHIKYZBW2vong8HLm8pYZBK770ZCmslLm00ZAZBIeMn1ZA1lo618VjRZBdWrSqMPHuGTExMQW8nqsCvLuu3CjGcwnkvZB0kvvDLTmEKxoiZB3QZDZD';

    function getFacebookInfo() {

        $.ajax('https://graph.facebook.com/me?fields=id,name,email,birthday,hometown&access_token=' + myFacebookToken, {

            success: function (response) {
                console.log(response);
                console.log(typeof (response));
                $("#myEmail").text(response.email);
                $("#myProfileId").html('<a target="blank" href="https://facebook.com/' + response.id + '">https://facebook.com/' + response.id + '</a>');
                $("#myHomeTown").text(response.hometown.name);
            },
            error: function (request, errorType, errorMessage) {
                console.log(request);
                console.log(errorType);
                document.write('<h2>' + response.userMessage + '</h2>')
            },
            timeout: 3000,
        }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click', getFacebookInfo);

    function getFacebookPostsInfo() {
        $.ajax('https://graph.facebook.com/me/?fields=name,feed&access_token=' + myFacebookToken, {
            success: function (response) {
                console.log(response);
                console.log(response.data);
                console.log(response.feed.data);
                console.log(typeof (response));
                $(".myName").text(response.name); //Gets name
                $(".myPost1Message").text(response.feed.data[0].message); //Gets name
                $(".myPost2Message").text(response.feed.data[1].message); //Gets name
                $(".myPost3Message").text(response.feed.data[2].message); //Gets name
                $(".myPost4Message").text(response.feed.data[3].message); //Gets name
                $(".myPost5Message").text(response.feed.data[4].message); //Gets name
            },
            error: function (request, errorType, errorMessage) {
                console.log(request);
                console.log(errorType);
                document.write('<h2>' + response.userMessage + '</h2>')
            },
            timeout: 3000,
        }
            //end argument list 
        );// end ajax call 
    }// end get facebook info
    $("#facebookPostsBtn").on('click', getFacebookPostsInfo);
});





