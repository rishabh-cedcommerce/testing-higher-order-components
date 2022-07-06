import React from 'react';

const HOC = (WrappedComponent, entity) => {
    return class extends React.Component {
        state = {
            data: [],
            key: ""
        };

        componentDidMount() {
            const call = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                this.setState({ ...this.state, data: json });
            }
            call();
        }
        render() {
            let { data, key } = this.state;
            let filteredData=data.filter(e=>{
                if(entity=="users"){
                    const {name}=e;
                    return name.indexOf(key) >= 0
                }
                if(entity=="todos"){
                    const{title}=e;
                    return title.indexOf(key) >= 0
                }
            })
            return (
                <div>
                    <h1>{entity}</h1>
                    <input type="text" value={key} onChange={(e) => this.setState({ ...this.state, key: e.target.value })} />
                    <WrappedComponent data={filteredData}></WrappedComponent>
                </div>
            );
        }
    }
}

export default HOC;