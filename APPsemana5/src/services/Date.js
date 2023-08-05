class Date {
    constructor(year, month, day){
        this._year = year;
        this._month = this.ValidateMonth(month);
        this._day = day;
    }

    Print(){
        return`${this._year}/${this._month}/${this._day}`;
    }

    ValidateMonth(m){
        if(m < 1 || m > 12){
            throw new Error('el numero ingresado no corresponde');
        }
        return m
    }
}

module.exports = {Date};