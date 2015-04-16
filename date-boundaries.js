if (!Date.prototype.getLastOfMonth) {
    Date.prototype.getLastOfMonth = function() {
        var year = this.getFullYear();
        var month = this.getMonth();
        return new Date(year, month + 1, 0);
    }
}

if (!Date.prototype.getFirstOfMonth) {
    Date.prototype.getFirstOfMonth = function() {
        var year = this.getFullYear();
        var month = this.getMonth();
        return new Date(year, month, 1);        
    }
}