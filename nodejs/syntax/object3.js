var v1 = 'v1';
// 100000 code
v1 = 'egoing';
var v2 = 'v2';

var q = {    //함수는 값이다. 객체는 값을 저장하는 그릇이다. 라는 특성을
    v1: 'v1',   //이용해서 서로연관된 데이터와 서로연관된 처리방법들을 
    v2: 'v2',   // 담고있는 함수들을 그룹핑 하므로써 코드의 복잡성을 
    f1: function(){console.log(this.v1);},  // 획기적으로 낮출수 있다.
    f2: function(){console.log(this.v2);}
};
q.f1();
q.f2();
// 객체지향은 코드를 정리정돈해서 복잡성을 낮추는 기능으로부터 출발한다.