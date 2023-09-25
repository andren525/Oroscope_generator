const vibes = ['ambitious and hardworking','Intelligent and clever','friendly and funny','caring and kind','cheerful and encouraging','talkative and social','bubbly and fun','romantic and loving', 'honest and trustworthy','charming and attractive'];
const fortuneQuotes = ['Do not be afraid of competition','An exciting opportunity lies ahead of you.','You love peace','You will always be surrounded by true friends.','Sell your ideas-they have exceptional merit.','You should be able to undertake and complete anything.','You are wise beyond your years.','Your ability to juggle many tasks will take you far.','A routine task will turn into an enchanting adventure.','Beware of all enterprises that require new clothes.'];
const getRandMessage = (array) =>{
    let i = Math.floor(Math.random()*array.length);
    return array[i];
}
const getFortune = () =>{
    const randVibes = getRandMessage(vibes);
    const randFortune = getRandMessage(fortuneQuotes);
    return 'You are '+randVibes+' ; Love '+Math.floor(Math.random()*11)+'/10 Work '+Math.floor(Math.random()*11)+'/10 wellbeing '+Math.floor(Math.random()*11)+'/10 ; '+randFortune;
}
console.log(getFortune());