//Making data structure to store the information about the team:
const team =  {  
  _players: //First property of the object 'team'
  //Populating the empty _players array with 3 properties:
  [{firstName:'Rob', lastName: 'Gefferson', age: 31},
   {firstName:'Ben', lastName: 'Clarkson', age: 36},
    {firstName:'Dan', lastName: 'Peterson', age: 30}],

  _games: //Second property of the object 'team' 
  //Populating the empty _games array with 3 properties:
  [{opponent:'Mark', teamPoints: 32, opponentPoints: 30},
   {opponent:'David', teamPoints: 40, opponentPoints: 28},
    {opponent:'Tim', teamPoints: 38, opponentPoints: 31}],

 //Creating a getter method called players to retrieve the _players property:  
 get players() {
  return this._players;
 },
 //Creating a getter method called games to retrieve the _games property:
 get games() {
  return this._games;
 },
//Adding new player to the team:
 addPlayer(newFirstName, newLastName, newAge) {
   let player = {firstName: newFirstName, lastName: newLastName, age: newAge};
   this.players.push(player); //Adding the player object to the team's _players array
 },
addGame(newOpponent, newTeamPoints, newOpponentPoints) {
   let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
   this.games.push(game) //Adding the game object to the team's _games array
 }
};
 //Testing if the new .addPlayer() method works by adding a new player:
 team.addPlayer('Bugs', 'Bunny', 76); 
 console.log(team.players);
//Testing if the new .addgame() method works by adding a new game:
team.addGame('Titans', 100, 98);
console.log(team.games);