const app = Vue.createApp({
    data() {
      return {
        orders: [],
        currentPage: 1,
        rowsPerPage: 10,
      };
    },
    mounted() {
        //fetching all table data
      axios
        .get("./data.json")
        .then((response) => {
          this.orders = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    created() {
        this.generateTable();
      },      
    computed: {
      totalPages() {
        return Math.ceil(this.orders.length / this.rowsPerPage);
      },
      paginatedOrders() {
        const start = (this.currentPage - 1) * this.rowsPerPage;
        const end = start + this.rowsPerPage;
        return this.orders.slice(start, end);
      },
    },
    methods: {

        //this method is to add class on the status column
      getStatusClass(status) {
        if (status === "Completed") {
          return "success";
        } else if (status === "Canceled") {
          return "danger";
        } else {
          return "warning";
        }
      },

      //this method handles the rows per page dropdown change
      handleRowsPerPageChange() {
        this.currentPage = 1; // Reset the current page when rowsPerPage changes
        this.generateTable(); // Re-render the table with the updated rowsPerPage
      },

      //this method is to generate table on the base of pagination calculated
      generateTable() {
        const start = (this.currentPage - 1) * this.rowsPerPage;
        const end = start + this.rowsPerPage;
        this.paginatedOrders = this.orders.slice(start, end);
      },

      //this method handles the prev page action
      goToPrevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },

      //this method handles the next page action
      goToNextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },

      //this method handles rendering to the page that you click
      goToPage(pageNumber) {
        this.currentPage = pageNumber;
      },
    },
  });
  
  app.mount("#app");
  