import Icon from "./Icon";

export default function Content({ data }) {
  const formattedDate = new Date(data?.created_at).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className='Main-div'>
      <img className='Main-img' src={data?.avatar_url} alt={data?.name} />
      <article className='Main-article'>
        <h2 className='Main-article-h2'>{data?.name}</h2>
        <p className='Main-article-p'>@{data?.login}</p>
        <p className='Main-article-p-joined'>
          Joined <time dateTime={data?.created_at}>{formattedDate}</time>
        </p>
      </article>

      {data?.bio ? (
        <p className='Main-p'>{data?.bio}</p>
      ) : (
        <p className='Main-p'>This profile has no bio</p>
      )}

      <div className='Main-profile'>
        <section className='Main-profile-section'>
          <h5 className='Main-profile-h5'>Repos</h5>
          <p className='Main-profile-p'>{data?.public_repos}</p>
        </section>
        <section className='Main-profile-section'>
          <h5 className='Main-profile-h5'>Followers</h5>
          <p className='Main-profile-p'>{data?.followers}</p>
        </section>
        <section className='Main-profile-section'>
          <h5 className='Main-profile-h5'>Following</h5>
          <p className='Main-profile-p'>{data?.following}</p>
        </section>
      </div>

      <ul className='Main-social'>
        <li className='Main-social-li'>
          <Icon name='location' />
          <span className='Main-social-span'>
            {data?.location ? data?.location : "Not Available"}
          </span>
        </li>
        <li className='Main-social-li'>
          <Icon name='website' />
          <span className='Main-social-span'>
            <a className='Main-social-a' href={data?.blog} target='_blank'>
              {data?.blog ? data?.blog : "Not Available"}
            </a>
          </span>
        </li>
        <li className='Main-social-li'>
          <Icon name='twitter' />
          <span className='Main-social-span'>
            {data?.twitter_username
              ? "@" + data?.twitter_username
              : "Not Available"}
          </span>
        </li>
        <li className='Main-social-li'>
          <Icon name='company' />
          <span className='Main-social-span'>
            {data?.company ? data?.company : "Not Available"}
          </span>
        </li>
      </ul>
    </div>
  );
}
