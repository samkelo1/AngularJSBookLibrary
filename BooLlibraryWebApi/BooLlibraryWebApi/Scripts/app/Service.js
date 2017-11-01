app.service('CRUD_OperService', function ($http) {

    //Create new record  
    this.post = function (Book) {
        var request = $http({
            method: "post",
            url: "/api/BooksApi",
            data: Book
        });
        return request;
    }

    //Get Single Records  
    this.get = function (id) {
        return $http.get("/api/BooksApi/" + Id);
    }

    //Get All Book  
    this.getAllBooks = function () {
        return $http.get("/api/BooksApi");
    }

    //Update the Record  
    this.put = function (Id, Book) {
        var request = $http({
            method: "put",
            url: "/api/BooksApi/" + Id,
            data: Book
        });
        return request;
    }

    //Delete the Record  
    this.delete = function (Id) {
        var request = $http({
            method: "delete",
            url: "/api/BooksApi/" + Id
        });
        return request;
    }
});