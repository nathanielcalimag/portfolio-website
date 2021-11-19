const SocialLinks = (props) => {
  return (
    <ul className={props.listClasses}>
      {props.socialLinks.map((socialLink, i) => (
        <>
          <li className={props.linkClasses} key={socialLink.href}>
            <a href={socialLink.href} target="_blank" rel="noopener noreferrer">
              {socialLink.content}
            </a>
          </li>
          {i !== props.socialLinks.length - 1 && props.separator}
        </>
      ))}
    </ul>
  );
};

export default SocialLinks;
