<template>
  <div class="container mt-4">
    <h1>Contact</h1>
    <form class="mt-3">
      <div class="mb-3">
        <label for="naam" class="form-label">Naam</label>
        <input type="text" class="form-control" id="naam" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">E-mail</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <div class="mb-3">
        <label for="bericht" class="form-label">Bericht</label>
        <textarea class="form-control" id="bericht" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Verzenden</button>
    </form>
  </div>
</template>
