import React from "react";

import { useNavigate } from "react-router-dom";
import { getRecentqueryDhiWise1 } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Column, Row, Img, Text, Button, Line, List } from "components";

const MyTotalTweetsPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi1();
  }, []);

  function callApi1() {
    const req = {};

    getRecentqueryDhiWise1(req)
      .then((res) => {
        setapiData1(res);

        toast.success("Got it!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Opps!");
      });
  }
  function handleNavigate1() {
    navigate("/profilepage");
  }
  function handleNavigate2() {
    navigate("/recenttweets");
  }
  function handleNavigate3() {
    navigate("/");
  }
  function handleNavigate4() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 font-helveticaneue justify-end mx-[auto] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] 2xl:pl-[86px] w-[100%]">
        <Column className="items-center 3xl:mr-[103px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[86px] w-[94%]">
          <Row className="items-center w-[100%]">
            <Column className="lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] w-[20%]">
              <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[78%]">
                <Img
                  src="images/img_vector_58.png"
                  className="common-pointer lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] ml-[0] w-[14%]"
                  onClick={handleNavigate4}
                  alt="Vector"
                />
                <Row
                  className="common-pointer lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[52%]"
                  onClick={handleNavigate3}
                >
                  <Img
                    src="images/img_vector_59.png"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[26%]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[60%]">
                  <Img
                    src="images/img_vector_60.png"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Explore
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[92%]"
                  onClick={handleNavigate2}
                >
                  <Img
                    src="images/img_vector_61.png"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Recent Tweets
                  </Text>
                </Row>
                <Column className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] pl-[3px] w-[100%]">
                  <Row className="items-center w-[100%]">
                    <Img
                      src="images/img_vector_62.png"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[11%]"
                      alt="Vector"
                    />
                    <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                      My Total Tweets
                    </Text>
                  </Row>
                </Column>
                <Row
                  className="common-pointer ml-[3px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[53%]"
                  onClick={handleNavigate1}
                >
                  <Img
                    src="images/img_vector_63.png"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[19%]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Profile
                  </Text>
                </Row>
              </Column>
              <Column className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[91%]">
                <Column className="items-center pr-[0] w-[100%]">
                  <Button
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder24"
                    size="lg"
                    variant="FillBlue500"
                  >
                    Tweet
                  </Button>
                </Column>
                <Row className="justify-between lg:mt-[448px] xl:mt-[512px] 2xl:mt-[576px] 3xl:mt-[691px] w-[100%]">
                  <Img
                    src="images/img_profilepicture_39.png"
                    className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] rounded-radius50 lg:w-[30px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]"
                    alt="ProfilePicture"
                  />
                  <Column className="w-[69%]">
                    <Text className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      Jerome Bell
                    </Text>
                    <Text className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      @afonsoinocente
                    </Text>
                  </Column>
                  <Img
                    src="images/img_group544_36.png"
                    className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[6%]"
                    alt="Group544"
                  />
                </Row>
              </Column>
            </Column>
            <Line className="bg-bluegray_50 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[1px]" />
            <Column className="w-[78%]">
              <Column className="items-center lg:pl-[22px] xl:pl-[25px] 2xl:pl-[29px] 3xl:pl-[34px] w-[100%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-gray_901 w-[auto]">
                    My Total Tweets
                  </Text>
                  <Img
                    src="images/img_vector_64.png"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] my-[0] w-[2%]"
                    alt="Vector"
                  />
                </Row>
              </Column>
              <Row className="items-center 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[40%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Date
                </Text>
                <Text className="font-bold lg:ml-[237px] xl:ml-[271px] 2xl:ml-[305px] 3xl:ml-[366px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  count
                </Text>
              </Row>
              <Line className="bg-bluegray_50 h-[0.65px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] rotate-[90deg] w-[62%]" />
              <List
                className="gap-[0] min-h-[auto] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[45%]"
                orientation="vertical"
              >
                {apiData1?.data?.map((apiData1DataEle, index) => {
                  return (
                    <React.Fragment key={`apiData1DataEle${index}`}>
                      <Row className="items-center justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                        <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                          {apiData1DataEle?.start}
                        </Text>
                        <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                          {apiData1DataEle?.["tweet_count"]}
                        </Text>
                      </Row>
                    </React.Fragment>
                  );
                })}
              </List>
            </Column>
          </Row>
        </Column>
        <Line className="bg-black_900_14 h-[1px] lg:ml-[182px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mt-[161px] xl:mt-[184px] 2xl:mt-[207px] 3xl:mt-[248px] w-[51%]" />
      </Column>

      <ToastContainer />
    </>
  );
};

export default MyTotalTweetsPage;
