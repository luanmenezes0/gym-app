<form method="POST" action="?/signIn">
  <label for="username">Email</label>
  <input type="email" id="email" name="email" placeholder="Email" required />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" placeholder="Password" required />

  <button type="submit">Login</button>
</form>

<a href="/signup">Create an account</a>

<style>
  input {
    width: 20rem;
  }

  form {
    margin: 2rem auto;
    width: 100%;
  }
</style>
