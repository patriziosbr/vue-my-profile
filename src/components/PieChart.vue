<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.renderChart(
      {
        labels: ["Ux Reserch", "UI Design", "Prototyping", "Front-End Dev", "Web Developer", "Back-end Dev", "Database"],
        datasets: [
          {
            backgroundColor: ["#0d6efd", "#ad5ae9", "#f041c3", "#ff3b95","#ff5866","#ff803a", "#ffa600"],
            data: [10, 20, 10, 20, 20, 10, 10 ]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>