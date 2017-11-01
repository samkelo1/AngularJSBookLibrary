app.controller('CRUD_OperController', function ($scope, CRUD_OperService) {
    $scope.OperType = 1;
    //1 Mean New Entry  

    GetAllRecords();
    //To Get All Records  
    function GetAllRecords() {
        var promiseGet = CRUD_OperService.getAllBooks();
        promiseGet.then(function (pl) { $scope.Books = pl.data },
              function (errorPl) {
                  $log.error('Some Error in Getting Records.', errorPl);
              });
    }

    //To Clear all input controls.  
    function ClearModels() {
        $scope.OperType = 1;
        $scope.Id = "";
        $scope.ISBN = "";
        $scope.Title = "";
        $scope.Subtitle = "";
        $scope.Description = "";
        $scope.Contributors = "";
        $scope.Language = "";
        $scope.PublicationDate = "";
    }

    //To Create new record and Edit an existing Record.  
    $scope.save = function () {
        var Book = {
            ISBN: $scope.ISBN,
            Title: $scope.Title,
            Subtitle: $scope.Subtitle,
            Description: $scope.Description,
            Contributors: $scope.Contributors,
            Language: $scope.Language,
            PublicationDate: $scope.PublicationDate
        };
        if ($scope.OperType === 1) {
            var promisePost = CRUD_OperService.post(Book);
            promisePost.then(function (pl) {
                $scope.Id = pl.data.Id;
                GetAllRecords();
                ClearModels();
            }, function (err) {
                console.log("Err" + err);
            });
        } else {
            //Edit the record                
            Book.id = $scope.id;
            var promisePut = CRUD_OperService.put($scope.Id, Book);
            promisePut.then(function (pl) {
                $scope.Message = "Book Updated Successfuly";
                GetAllRecords();
                ClearModels();
            }, function (err) {
                console.log("Err" + err);
            });
        }
    };

    //To Delete Record  
    $scope.delete = function (Book) {
        var promiseDelete = CRUD_OperService.delete(Book.Id);
        promiseDelete.then(function (pl) {
            $scope.Message = "Book Deleted Successfuly";
            GetAllRecords();
            ClearModels();
        }, function (err) {
            console.log("Err" + err);
        });
    }

    //To Get Book Detail on the Base of Book ID  
    $scope.get = function (Book) {
        var promiseGetSingle = CRUD_OperService.get(Book.Id);

        promiseGetSingle.then(function (pl) {
            var res = pl.data;
            $scope.Id = res.Id;
            $scope.ISBN = res.ISBN;
            $scope.Subtitle = res.Subtitle;
            $scope.Description = res.Description;
            $scope.Contributors = res.Contributors;
            $scope.Language = res.Language;
            $scope.PublicationDate = res.PublicationDate;

            $scope.OperType = 0;
        },
                  function (errorPl) {
                      console.log('Some Error in Getting Details', errorPl);
                  });
    }

    //To Clear all Inputs controls value.  
    $scope.clear = function () {
        $scope.OperType = 1;
        $scope.Id = "";
        $scope.ISBN = "";
        $scope.Subtitle = "";
        $scope.Description = "";
        $scope.Contributions = "";
        $scope.Language = "";
        $scope.PublicationDate = "";
    }

});