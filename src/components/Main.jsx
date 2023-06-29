import Form from "./Form";
import Icon from "./Icon";

export default function Main() {
  return (
    <main className='Main'>
      <Form />
      <Content />
    </main>
  );
}

function Content() {
  return (
    <div className='Main-div'>
      <img className='Main-img' src='/assets/Oval.png' alt='#' />
      <article className='Main-article'>
        <h2 className='Main-article-h2'>The Octocat</h2>
        <p className='Main-article-p'>@octocat</p>
        <p className='Main-article-p-joined'>
          Joined <time>25 Jan 2011</time>
        </p>
      </article>
      <p className='Main-p'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>

      <div className='Main-profile'>
        <section className='Main-profile-section'>
          <h5 className='Main-profile-h5'>Repos</h5>
          <p className='Main-profile-p'>8</p>
        </section>
        <section className='Main-profile-section'>
          <h5 className='Main-profile-h5'>Followers</h5>
          <p className='Main-profile-p'>3938</p>
        </section>
        <section className='Main-profile-section'>
          <h5 className='Main-profile-h5'>Following</h5>
          <p className='Main-profile-p'>9</p>
        </section>
      </div>

      <ul className='Main-social'>
        <li className='Main-social-li'>
          <Icon name='location' />
          <span className='Main-social-span'>San Francisco</span>
        </li>
        <li className='Main-social-li'>
          <Icon name='website' />
          <span className='Main-social-span'>https://github.blog</span>
        </li>
        <li className='Main-social-li'>
          <Icon name='twitter' />
          <span className='Main-social-span'>Not Available</span>
        </li>
        <li className='Main-social-li'>
          <Icon name='company' />
          <span className='Main-social-span'>@github</span>
        </li>
      </ul>
    </div>
  );
}



