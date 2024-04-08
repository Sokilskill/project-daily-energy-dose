import StatisticsInfo from '../StatisticsInfo/StatisticsInfo';
import {
  WelcomeContainer,
  InsertPart,
  WelcomeBgd,
} from './WelcomeLayout.styled.jsx';
import bg_mod_1 from '../../assets/Welcome/images/people-training-gym-mob.webp';
import bg_mod_2 from '../../assets/Welcome/images/people-training-gym-mob-2x.webp';
import bg_tab_1 from '../../assets/Welcome/images/people-training-gym-tab.webp';
import bg_tab_2 from '../../assets/Welcome/images/people-training-gym-tab-2x.webp';
import bg_desk_1 from '../../assets/Welcome/images/people-training-gym-desk.webp';
import bg_desk_2 from '../../assets/Welcome/images/people-training-gym-desk-2x.webp';

const WelcomeLayout = ({ children }) => {
  return (
    <>
      <section>
        <WelcomeContainer className="container">
          <InsertPart>{children}</InsertPart>
          <WelcomeBgd
            bgi={[bg_mod_1, bg_mod_2, bg_tab_1, bg_tab_2, bg_desk_1, bg_desk_2]}
          >
            <StatisticsInfo />
          </WelcomeBgd>
        </WelcomeContainer>
      </section>
    </>
  );
};
export default WelcomeLayout;
