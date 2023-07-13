import React from 'react';
import Card from '../Card/Card';
import image_url from '../../api/Basic_API_Info/image_url';

const Row = ({title, arr=[{}]}) => {

      return (
            <div className='row'>
                  <h4>{title}</h4>
                        <div>
                              { 
                                    arr.map((item, i) => {
                                          return (
                                                <Card key={i} link={`${image_url}${item.poster_path}`}/>
                                          )
                                    })
                              }
                        </div>
            </div>
      )
}

export default Row