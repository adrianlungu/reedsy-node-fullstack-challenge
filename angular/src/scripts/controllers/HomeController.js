/*
  You could also use a class for a controller, but if you work
  with $scope and not the controller-as syntax a function makes
  more sense, because most of the code would anyway go to the
  constructor if you would use a class.
*/

export default class HomeController {

    /*@ngInject;*/
    constructor($scope, BookService) {
        this.BookService = BookService;
        this.$scope = $scope;

        this.data = {
            data: [],
            size: 0,
        };
        this.pagination = {
            page: 1,
            size: 5,
        };

        this.init();

    }

    init() {
        this.BookService.get(this.pagination.page - 1, this.pagination.size).then(data => {

            this.$scope.$apply(() => {
                this.data = data;
            });

        });
    }

    clickBook(index) {
        this.data.data[index].showDescription = this.data.data[index].showDescription ? !this.data.data[index].showDescription : true;
    }

    pageNext() {
        if (this.pagination.page === this.data.size / this.pagination.size) return;

        this.pagination.page++;
        this.init();
    }

    pagePrevious() {
        if (this.pagination.page === 1) return;

        this.pagination.page--;
        this.init();
    }

}
