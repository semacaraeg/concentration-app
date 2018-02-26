export class Card{
  isFlipped: boolean;
  code : string;
 
    constructor() {
  }
    
    
/*    
    suit : string;
    value : string;
    imgPath : string = 'assets/img/';
    cardPath: string;
    
    
    
    constructor(suit: string, value: string){
        this.suit = suit;
        this.value = value;
        this.cardPath = this.imgPath + this.getCardDetails() + ".png";
    }
    
    getCardDetails(){
        return this.getValue() + "_of_" + this.getSuit();
    }
    From the API
    The value, one of A (for an ace), 2, 3, 4, 5, 6, 7, 8, 9, 0 (for a ten), J (jack), Q (queen), or K (king);
    The suit, one of S (Spades), D (Diamonds), C (Clubs), or H (Hearts).
    
    getValue(){
        if(this.value == '0'){ return '10';}
        else if(this.value == 'J'){ return 'jack';}
        else if (this.value == 'Q'){ return 'queen';}
        else if (this.value == 'K'){ return 'king';}
        else if (this.value == 'A'){ return 'ace';}
        else{ return this.value;}
    }
    
    getSuit(){
        if(this.suit == 'S'){ return 'spades';}
        else if (this.suit == 'D'){ return 'diamonds';}
        else if (this.suit == 'C'){ return 'clubs';}
        else if (this.suit == 'H'){ return 'hearts';}
    }
    
    public compare( secondCard : Card){
        if(this.value == secondCard.value){
            return 1;
        }else{
            return -1;
        }
    }
*/
    
}