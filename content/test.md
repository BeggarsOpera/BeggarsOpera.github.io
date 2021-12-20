<!DOCTYPE html>
<html>
    <head>
        <title>Beggar's Opera</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="css/tei.css">
        <script src="js/CETEI.js"></script>
        <script>
            let c = new CETEI();
            c.getHTML5('bo1.xml', function (data) {
                document.getElementsByTagName("body")[0].appendChild(data);
            });</script>
    </head>
    <body> </body>
</html>