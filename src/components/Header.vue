<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <a class="navbar-brand" href="#">Clube do Robson</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  async data() {
    const proClubsApi = require("fifa-api-proclubs");
    const jquery = require("jquery");

    await $.ajax({
      type: "GET",
      url: url,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      //OR
      //beforeSend: function(xhr) {
      //  xhr.setRequestHeader("My-First-Header", "first value");
      //  xhr.setRequestHeader("My-Second-Header", "second value");
      //}
    }).done(function (data) {
      console.log(data);
    });

    proClubsApi.club.platformType("PS4");
    const resp1 = await proClubsApi.leaderboard.getSeasonLeaderboard();
    console.log(resp1);
    const resp = await proClubsApi.club.getClubInfo("6703918");
    console.log(resp);
  },
};
</script>

<style>
.navbar-brand .navbar-link {
  color: white;
}

.navbar-light {
  background-color: #bf00cc;
}
</style>
