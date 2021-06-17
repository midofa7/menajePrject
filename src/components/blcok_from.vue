
<template>
  <div class="from__block">

    <div class="from__block">

	<form  action="http://localhost/php/brojetEmail/index.php" methods="POST">

		<div class="form-group">
			<label for="exampleInputEmail1">Email address</label>
			<input type="email" name="email" class="form-control" aria-describedby="emailHelp"
				placeholder="Enter email">
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Name entreprise</label>
			<input type="text" class="form-control" name="entreprise" placeholder="Name entreprise">
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">numéro de téléphone</label>
			<input type="text" class="form-control" name="telephone" placeholder="numéro de téléphone">
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Commentaires</label>
			<textarea class="form-control" rows="5" name="Commentaires">Commentaires</textarea>
		</div>
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>

</div>
  </div>
</template>

<script>



export default {
  name: "Home",
  components: {
  },

  props: [],
  created: function () { },
  methods: {},
};
</script>
<style scoped>
</style>