// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <form class="container">

      <div class="mb-3">
        <label for="name" class="form-label formLabel">Name</label>
        <input class="form-control" id="name" required></input>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label formLabel">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required></input>
      </div>

      <div class="mb-3">
        <label for="msg" class="form-label formLabel">Message</label>
        <textarea class="form-control" id="msg" rows="3" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
}
