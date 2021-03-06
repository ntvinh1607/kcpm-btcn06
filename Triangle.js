var Point = require('./Point');

module.exports = class Triangle {
    constructor(point1, point2, point3) {
        this.point1=point1;
        this.point2=point2;
        this.point3=point3;
    }
    classify(){
        const a = Point.distance(this.point1, this.point2);
        const b = Point.distance(this.point2, this.point3);
        const c = Point.distance(this.point3, this.point1);
        if( a<b+c && b<a+c && c<a+b ){ //3 cạnh tạo thành tam giác khi tổng hai cạnh bất kì luôn lớn hơn cạnh còn lại.
            if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b) //bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông
                return {code:1, message:"Tam giác vuông"};
            else if(a==b && b==c) // 3 cạnh bằng nhau
                return {code:2, message:"Tam giác đều"};
            else if(a==b || a==c || b==c) // 2 cạnh bằng nhau
                return {code:3, message:"Tam giác cân"};
            else if(a*a > b*b+c*c || b*b > a*a+c*c || c*c > a*a+b*b)  //tổng bình phương 1 cạnh lớn hơn 2 cạnh còn lại
                return {code:4, message:"Tam giác tù"};
            else
                return {code:5, message:"Tam giác nhọn"};
        }
        else
            return {code:0, message:"Không phải tam giác"};
    }
    perimeter(){
        const type = this.classify();
        if(type.code === 0)
        {
            return type.message;
        }else {
            const a = Point.distance(this.point1, this.point2);
            const b = Point.distance(this.point2, this.point3);
            const c = Point.distance(this.point3, this.point1);
            return a+b+c;
        }
    }
}