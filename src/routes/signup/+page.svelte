<form method="POST" action="?/signup">
  <label for="username">Name</label>
  <input type="text" id="name" name="name" placeholder="name" required />

  <label for="username">Email</label>
  <input type="email" id="email" name="email" placeholder="email" required />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" placeholder="Password" required />

  <button type="submit">Create Account</button>
</form>

<a href="/login">I already have an account</a>

<style>
  input {
    width: 100%;
  }

  form {
    margin-block: 2rem;
  }
</style>
