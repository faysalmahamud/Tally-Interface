import {Sidebar,ContentArea} from '../Assets/Component'
import '../Assets/Headers/index'
import store from '../Assets/Redux/Store'
import { Provider } from 'react-redux'
const PurchaseReg = () => (
  <Provider store={store}> 

  <div>
  <div id="wrapper">
    <Sidebar/>
    <ContentArea/>
    </div>
  </div>
</Provider>
);

export default PurchaseReg;