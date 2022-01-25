type TweetProps = {
  text: string;
}


export function Tweet(props: TweetProps){
  return(
    <div>{props.text}</div>
  );
}