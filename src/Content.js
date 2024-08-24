import React, { Component } from 'react';

class Content extends Component {
    render() {
        return(
            <div>
            <h3>giới thiệu</h3>
                <p>Trong ReactJs, đôi khi bạn có một số component và
                 tùy thuộc vào từng điều kiện như trạng thái của state, props,...
                  bạn muốn hiển thị một hoặc một số component nào đó. Khi đó,
                   bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.</p>
            </div>
        )
    }
}

export default Content;
