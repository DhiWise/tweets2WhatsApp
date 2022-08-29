import React from "react";

import { useNavigate } from "react-router-dom";
import { getFollowing } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  Stack,
  List,
  Input,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FollowingListPage = () => {
  const [apiData3, setapiData3] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi3();
  }, []);

  function callApi3() {
    const req = {};

    getFollowing(req)
      .then((res) => {
        setapiData3(res);

        toast.success("Following fetched!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("App failed to fetch the Following!");
      });
  }
  function handleNavigate21() {
    navigate("/followerslist");
  }
  function handleNavigate22() {
    navigate("/profilepage");
  }
  function handleNavigate23() {
    navigate("/mytotaltweets");
  }
  function handleNavigate24() {
    navigate("/recenttweets");
  }
  function handleNavigate25() {
    navigate("/");
  }
  function handleNavigate26() {
    navigate("/");
  }
  function handleBackNavigation3() {
    navigate(-1);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-helveticaneue justify-end mx-[auto] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] 2xl:pl-[86px] w-[100%]">
        <Column className="items-center 3xl:mr-[103px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[86px] w-[94%]">
          <Row className="items-center w-[100%]">
            <Column className="lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] w-[20%]">
              <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[78%]">
                <Img
                  src="images/img_vector.png"
                  className="common-pointer lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] ml-[0] w-[14%]"
                  onClick={handleNavigate26}
                  alt="Vector"
                />
                <Row
                  className="common-pointer lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[52%]"
                  onClick={handleNavigate25}
                >
                  <Img
                    src="images/img_vector_1.png"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[26%]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[60%]">
                  <Img
                    src="images/img_vector_2.png"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Explore
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[92%]"
                  onClick={handleNavigate24}
                >
                  <Img
                    src="images/img_vector_3.png"
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
                    onClick={handleNavigate23}
                  >
                    <Img
                      src="images/img_vector_4.png"
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
                  onClick={handleNavigate22}
                >
                  <Img
                    src="images/img_vector_5.png"
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
                    src="images/img_profilepicture.png"
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
                    src="images/img_group544.png"
                    className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[6%]"
                    alt="Group544"
                  />
                </Row>
              </Column>
            </Column>
            <Line className="bg-bluegray_50 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[1px]" />
            <Stack className="2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] w-[48%]">
              <Line className="absolute bg-bluegray_50 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] right-[0] w-[1px]" />
              <Column className="absolute left-[0] top-[3%] w-[100%]">
                <Row className="lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[29%]">
                  <Img
                    src="images/img_vector_6.png"
                    className="common-pointer lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    onClick={handleBackNavigation3}
                    alt="Vector"
                  />
                  <Column className="lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[74%]">
                    <Text className="font-helveticaneue font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Jerome Bell
                    </Text>
                    <Text className="font-helveticaneue1 font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      1,027 Tweets
                    </Text>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] 2xl:px-[100px] 3xl:px-[120px] lg:px-[77px] xl:px-[88px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text
                      className="common-pointer font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]"
                      onClick={handleNavigate21}
                    >
                      Followers
                    </Text>
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      Following
                    </Text>
                  </Row>
                </Column>
                <Img
                  src="images/img_group48.png"
                  className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]"
                  alt="Group48"
                />
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:pr-[23px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    {apiData3?.data?.map((apiData3DataEle, index) => {
                      return (
                        <React.Fragment key={`apiData3DataEle${index}`}>
                          <Row className="justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                            <Img
                              src="images/img_profilepicture_1.png"
                              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                              alt="ProfilePicture"
                            />
                            <Column className="w-[66%]">
                              <Text className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                                {apiData3DataEle?.name}
                              </Text>
                              <Text className="font-helveticaneue1 font-normal mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                                {apiData3DataEle?.username}
                              </Text>
                            </Column>
                            <Button className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[14%]">
                              Follow
                            </Button>
                            <Img
                              src="images/img_group544_1.png"
                              className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[2%]"
                              alt="Group544"
                            />
                          </Row>
                        </React.Fragment>
                      );
                    })}
                  </List>
                </Column>
              </Column>
            </Stack>
            <Column className="font-helveticaneue1 lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[28%]">
              <Column className="items-center pr-[2px] w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_600 text-bluegray_600 tracking-ls1 w-[100%]"
                  wrapClassName="flex w-[100%]"
                  name="SearchBar"
                  placeholder="Search Twitter"
                  prefix={
                    <Img
                      src="images/img_vector_7.png"
                      className="cursor-pointer lg:w-[12px] lg:ml-[5px] lg:mr-[12px] xl:w-[13px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[15px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[18px] 3xl:ml-[8px] 3xl:mr-[19px] my-[auto]"
                      alt="Vector"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#5b7083"
                        className="cursor-pointer lg:w-[12px] lg:ml-[7px] lg:mr-[17px] xl:w-[13px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[15px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[18px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder19"
                ></Input>
              </Column>
              <Column className="bg-gray_50 font-helveticaneue lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]">
                <Text className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_901 tracking-ls1 w-[auto]">
                  What’s happening
                </Text>
                <Column className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] w-[100%]">
                  <Column className="items-center lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] w-[96%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                        <Column className="w-[73%]">
                          <Row className="font-helveticaneue1 items-center w-[57%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              COVID19
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              ·
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              Last night
                            </Text>
                          </Row>
                          <Text className="font-bold font-helveticaneue leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_901 tracking-ls1 w-[100%]">
                            England’s Chief Medical Officer says the UK is at
                            the most dangerous time of the pandemic
                          </Text>
                          <Row className="font-helveticaneue1 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[62%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              Trending with
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
                              #covid19
                            </Text>
                          </Row>
                        </Column>
                        <Img
                          src="images/img_placeholder.png"
                          className="lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[22%]"
                          alt="Placeholder"
                        />
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-bluegray_50" />
                      <Row className="justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                        <Column className="w-[73%]">
                          <Row className="font-helveticaneue1 items-center w-[48%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              US news
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              ·
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              4h ago
                            </Text>
                          </Row>
                          <Text className="font-bold font-helveticaneue leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_901 tracking-ls1 w-[100%]">
                            Parler may go offline following suspensions by
                            Amazon, Apple and Google
                          </Text>
                          <Row className="font-helveticaneue1 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[57%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              Trending with
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
                              #trump
                            </Text>
                          </Row>
                        </Column>
                        <Img
                          src="images/img_placeholder_1.png"
                          className="lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[22%]"
                          alt="Placeholder"
                        />
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-bluegray_50" />
                      <Row className="justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                        <Column className="w-[73%]">
                          <Row className="font-helveticaneue1 items-center w-[37%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              India
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              ·
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              1h ago
                            </Text>
                          </Row>
                          <Text className="font-bold font-helveticaneue leading-[normal] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_901 tracking-ls1 w-[100%]">
                            India vs Australia: India hold on to earn a draw on
                            Day 5 in Sydney Test
                          </Text>
                          <Row className="font-helveticaneue1 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[55%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              Trending with
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
                              #sport
                            </Text>
                          </Row>
                        </Column>
                        <Img
                          src="images/img_placeholder_2.png"
                          className="lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[22%]"
                          alt="Placeholder"
                        />
                      </Row>
                    </List>
                  </Column>
                  <Text className="font-medium lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
                    Show more
                  </Text>
                </Column>
              </Column>
              <Column className="bg-gray_50 font-helveticaneue lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]">
                <Text className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]">
                  You might like
                </Text>
                <Column className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[9px] w-[100%]">
                  <Column className="items-center lg:mr-[12px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] pl-[1px] w-[95%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-center justify-between 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]">
                        <Column className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                          <Img
                            src="images/img_profilepicture_12.png"
                            className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 w-[100%]"
                            alt="ProfilePicture"
                          />
                        </Column>
                        <Column className="w-[53%]">
                          <Text className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
                            Bessie Cooper
                          </Text>
                          <Text className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                            @alessandroveronezi
                          </Text>
                        </Column>
                        <Button className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[25%]">
                          Follow
                        </Button>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-bluegray_50" />
                      <Row className="items-center justify-between 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]">
                        <Column className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                          <Img
                            src="images/img_profilepicture_13.png"
                            className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 w-[100%]"
                            alt="ProfilePicture"
                          />
                        </Column>
                        <Column className="w-[53%]">
                          <Text className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
                            Jenny Wilson
                          </Text>
                          <Text className="font-helveticaneue1 font-normal lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                            @gabrielcantarin
                          </Text>
                        </Column>
                        <Button className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[25%]">
                          Follow
                        </Button>
                      </Row>
                    </List>
                  </Column>
                  <Text className="font-medium lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
                    Show more
                  </Text>
                </Column>
              </Column>
              <Row className="font-helveticaneue1 items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[75%]">
                <Text className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                  Terms of Service
                </Text>
                <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                  Privacy Policy
                </Text>
                <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                  Cookie Policy
                </Text>
              </Row>
              <Row className="font-helveticaneue1 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[53%]">
                <Text className="font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                  Accessibility
                </Text>
                <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                  Ads info
                </Text>
                <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                  More
                </Text>
                <Img
                  src="images/img_group544_12.png"
                  className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] w-[5%]"
                  alt="Group544"
                />
              </Row>
              <Row className="font-helveticaneue1 items-center ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[31%]">
                <Img
                  src="images/img_vector_8.png"
                  className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                  alt="Vector"
                />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                  2022 Twitter, Inc.
                </Text>
              </Row>
            </Column>
          </Row>
        </Column>
        <Line className="bg-black_900_14 h-[1px] lg:ml-[182px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mt-[161px] xl:mt-[184px] 2xl:mt-[207px] 3xl:mt-[248px] w-[51%]" />
      </Column>

      <ToastContainer />
    </>
  );
};

export default FollowingListPage;
