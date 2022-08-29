import React from "react";

import { useNavigate } from "react-router-dom";
import { getRecentqueryDhiWise } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  List,
  CheckBox,
} from "components";

const RecentTweetsPage = () => {
  const [selectedTweets, setSelectedTweets] = React.useState([]);
  const [apiData4, setapiData4] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    callApi4();
  }, []);

  function callApi4() {
    const req = {};

    getRecentqueryDhiWise(req)
      .then((res) => {
        setapiData4(res);

        toast.success("Recent tweets fetched!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed fetching tweets!");
      });
  }
  function handleNavigate17() {
    navigate("/profilepage");
  }
  function handleNavigate18() {
    navigate("/mytotaltweets");
  }
  function handleNavigate19() {
    navigate("/");
  }
  function handleNavigate20() {
    navigate("/");
  }

  const sendSingleTweetToWhatsApp = (tweet) => {
    let myMsg = `https://twitter.com/dhiwise/status/${tweet?.id}`
    window.open(`https://api.whatsapp.com/send?text=${myMsg}`, '_blank')
  }

  const sendMultipleTweetsToWhatsApp = () => {
    let myMsg = [''];
    for (let i = 0; i < selectedTweets?.length; i++) {
      myMsg.push(` \n https://twitter.com/dhiwise/status/${selectedTweets[i]} \n`)
    }
    window.open(`https://api.whatsapp.com/send?text=${myMsg.join(' ')}`, '_blank')
  }

  return (
    <>
      <Column className="bg-white_A700 font-helveticaneue justify-end mx-[auto] w-[100%]">
        <Column className="items-end mr-[1px] w-[94%]">
          <Row className="items-center justify-end w-[100%]">
            <Column className="lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] w-[19%]">
              <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[78%]">
                <Img
                  src="images/img_vector_28.png"
                  className="common-pointer lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] ml-[0] w-[14%]"
                  onClick={handleNavigate20}
                  alt="Vector"
                />
                <Row
                  className="common-pointer lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[52%]"
                  onClick={handleNavigate19}
                >
                  <Img
                    src="images/img_vector_29.png"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[26%]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[60%]">
                  <Img
                    src="images/img_vector_30.png"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Explore
                  </Text>
                </Row>
                <Row className="items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[92%]">
                  <Img
                    src="images/img_vector_31.png"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Recent Tweets
                  </Text>
                </Row>
                <Column className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] pl-[3px] w-[100%]">
                  <Row
                    className="common-pointer items-center w-[100%]"
                    onClick={handleNavigate18}
                  >
                    <Img
                      src="images/img_vector_32.png"
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
                  onClick={handleNavigate17}
                >
                  <Img
                    src="images/img_vector_33.png"
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
                    src="images/img_profilepicture_21.png"
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
                    src="images/img_group544_18.png"
                    className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[6%]"
                    alt="Group544"
                  />
                </Row>
              </Column>
            </Column>
            <Line className="bg-bluegray_50 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[1px]" />
            <Column className="pb-[0] w-[80%]">
              <Column className="lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] w-[89%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-gray_901 w-[auto]">
                    Recent Tweets{" "}
                  </Text>
                  <Img
                    src="images/img_vector_34.png"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] my-[0] w-[2%]"
                    alt="Vector"
                  />
                </Row>
                {selectedTweets?.length > 1 ? <Button
                  className="2xl:mt-[25px] 3xl:mt-[30px] flex items-center justify-center lg:mt-[19px] text-center w-[12%] xl:mt-[22px]"
                  leftIcon={
                    <Img
                      src="images/img_path4.png"
                      className="text-center lg:w-[10px] lg:mr-[3px] xl:w-[11px] xl:mr-[4px] 2xl:w-[13px] 2xl:mr-[5px] 3xl:w-[15px] 3xl:mr-[6px]"
                      alt="path4"
                    />

                  }
                  onClick={sendMultipleTweetsToWhatsApp}
                >
                  <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                    Send Selected Tweets
                  </div>
                </Button> : null}
              </Column>
              <Line className="bg-bluegray_50 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
              <List
                className="gap-[0] min-h-[auto] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[89%]"
                orientation="vertical"
              >
                {apiData4?.data?.map((apiData4DataEle, index) => {
                  return (
                    <React.Fragment key={`apiData4DataEle${index}`}>
                      <Row className="justify-between lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                        <CheckBox
                          className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          name="Group44"
                          label=""
                          onChange={({ target: { checked } }) => {
                            if (checked) {
                              setSelectedTweets((prevState) => [
                                ...prevState,
                                apiData4DataEle?.id,
                              ]);
                            } else {
                              setSelectedTweets((prevState) =>
                                prevState.filter((e) => e !== apiData4DataEle?.id)
                              );
                            }
                          }}
                        ></CheckBox>
                        <Text className="font-bold lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 tracking-ls1 w-[85%]">
                          {apiData4DataEle?.text}
                        </Text>
                        <Button
                          className="flex items-center justify-center text-center w-[8%]"
                          leftIcon={
                            <Img
                              src="images/img_path4_1.png"
                              className="text-center lg:w-[10px] lg:mr-[3px] xl:w-[11px] xl:mr-[4px] 2xl:w-[13px] 2xl:mr-[5px] 3xl:w-[15px] 3xl:mr-[6px]"
                              alt="path4"
                            />
                          }
                          onClick={() => sendSingleTweetToWhatsApp(apiData4DataEle)}
                        >
                          <div className="bg-transparent font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Send
                          </div>
                        </Button>
                      </Row>
                    </React.Fragment>
                  );
                })}
              </List>
            </Column>
          </Row>
        </Column>
        <Line className="bg-black_900_14 h-[1px] lg:ml-[248px] xl:ml-[284px] 2xl:ml-[320px] 3xl:ml-[384px] lg:mt-[161px] xl:mt-[184px] 2xl:mt-[207px] 3xl:mt-[248px] w-[48%]" />
      </Column>

      <ToastContainer />
    </>
  );
};

export default RecentTweetsPage;
