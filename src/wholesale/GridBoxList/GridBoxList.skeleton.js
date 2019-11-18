import React, { PureComponent } from 'react';
import Skeleton from '../../base/skeleton';
import { Card } from '../../base';
import * as Style from './GridBoxList.style';

class GridboxListSkeleton extends PureComponent {
  render() {
    return (
      <Style.Wrapper>
        <Card className="card" elevation="flat">
          <Style.ImageContainer style={{ margin: 0 }}>
            <Skeleton width="100%" height="110px" />
          </Style.ImageContainer>
          <Skeleton width="100%" />
          <Skeleton width="60%" />
        </Card>
      </Style.Wrapper>
    );
  }
}

export default GridboxListSkeleton;
