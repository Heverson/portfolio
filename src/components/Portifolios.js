import React from 'react';
import ListSliderCarousel from "./components/ListSliderCarousel";

// import { Container } from './styles';

export default function Portifolios() {
  return (
     <main>
        <div className="row">
          <div className="col-sm-12">
              <h4>Wordpress</h4>
              <div className="row">
                  <ListSliderCarousel />
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
              <h4>React Native</h4>
              <div className="row">
                    <ListSliderCarousel />
              </div>
          </div>
        </div>
      </main>
  );
}
