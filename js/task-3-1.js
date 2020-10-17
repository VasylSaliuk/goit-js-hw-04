let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
//  const { mood = 'happy', full time = 'true', hobby = 'skydiving', premium = 'false' } = user;
 user.mood = 'happy';
 user['full time'] = true;
 user.hobby = 'skydiving';
 user.premium = false;

 console.log(user);

const keys = Object.keys(user);
for (const key of keys) {
    console.log(key);
    message += `${key}: ${user[key]}\n`;
}
 
 
console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */