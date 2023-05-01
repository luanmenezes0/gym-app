<form method="POST" action="?/signIn">
  <label for="username">Email</label>
  <input type="email" id="email" name="email" placeholder="email" required />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" placeholder="Password" required />

  <button type="submit">Login</button>
</form>

<style>
  input {
    width: 100%;
  }

  form {
    margin-block: 2rem;
  }
</style>
