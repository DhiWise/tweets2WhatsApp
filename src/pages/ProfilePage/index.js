import React from "react";

import { useNavigate } from "react-router-dom";
import { getUsers } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Line,
  Input,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ProfilePagePage = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = { headers: {} };

    getUsers(req)
      .then((res) => {
        setapiData(res);

        toast.success("Profile fetched");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Can not fetch profile at the moment.");
      });
  }
  function handleNavigate5() {
    navigate("/followinglist");
  }
  function handleNavigate6() {
    navigate("/followerslist");
  }
  function handleNavigate7() {
    navigate("/mytotaltweets");
  }
  function handleNavigate8() {
    navigate("/recenttweets");
  }
  function handleNavigate9() {
    navigate("/");
  }
  function handleNavigate10() {
    navigate("/");
  }
  function handleBackNavigation1() {
    navigate(-1);
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-helveticaneue justify-end mx-[auto] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] 2xl:pl-[86px] w-[100%]">
        <Column className="items-center 3xl:mr-[103px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[86px] w-[94%]">
          <Row className="w-[100%]">
            <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] w-[20%]">
              <Column className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[78%]">
                <Img
                  src="images/img_vector_44.png"
                  className="common-pointer lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] ml-[0] w-[14%]"
                  onClick={handleNavigate10}
                  alt="Vector"
                />
                <Row
                  className="common-pointer lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[52%]"
                  onClick={handleNavigate9}
                >
                  <Img
                    src="images/img_vector_45.png"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[26%]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[60%]">
                  <Img
                    src="images/img_vector_46.png"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Explore
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[92%]"
                  onClick={handleNavigate8}
                >
                  <Img
                    src="images/img_vector_47.png"
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
                    onClick={handleNavigate7}
                  >
                    <Img
                      src="images/img_vector_48.png"
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[11%]"
                      alt="Vector"
                    />
                    <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                      My Total Tweets
                    </Text>
                  </Row>
                </Column>
                <Row className="ml-[3px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[53%]">
                  <Img
                    src="images/img_vector_49.png"
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
                    src="images/img_profilepicture_36.png"
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
                    src="images/img_group544_32.png"
                    className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[6%]"
                    alt="Group544"
                  />
                </Row>
              </Column>
            </Column>
            <Stack className="2xl:h-[1117px] 3xl:h-[1340px] lg:h-[868px] xl:h-[993px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[48%]">
              <Column className="absolute h-[max-content] inset-y-[0] left-[0] my-[auto] w-[100%]">
                <Row className="lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] w-[29%]">
                  <Img
                    src="images/img_vector_50.png"
                    className="common-pointer lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    onClick={handleBackNavigation1}
                    alt="Vector"
                  />
                  <Column className="lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[74%]">
                    <Text className="font-helveticaneue font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                      {apiData?.data?.name}
                    </Text>
                    <Text className="font-helveticaneue1 font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                      {apiData?.data?.["public_metrics"]?.["tweet_count"]}
                    </Text>
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] w-[100%]">
                  <Column className="w-[100%]">
                    <Stack className="lg:h-[200px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] w-[100%]">
                      <Img
                        src="images/img_rectangle21.png"
                        className="absolute lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] left-[0] top-[0] w-[100%]"
                        alt="Rectangle21"
                      />
                      <Img
                        src="images/img_ellipse7.png"
                        className="absolute bottom-[0] xl:h-[105px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[91px] left-[3%] rounded-radius50 xl:w-[104px] 2xl:w-[117px] 3xl:w-[140px] lg:w-[91px]"
                        alt="Ellipse7"
                      />
                      <Button
                        className="absolute bottom-[3%] font-bold right-[4%] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[18%]"
                        shape="RoundedBorder19"
                        size="md"
                        variant="OutlineBluegray50"
                      >
                        Edit Profile
                      </Button>
                    </Stack>
                    <Column className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pl-[5px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] lg:pr-[17px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] w-[100%]">
                      <Column className="w-[100%]">
                        <Text className="font-bold font-helveticaneue lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_901 w-[auto]">
                          {apiData?.data?.name}
                        </Text>
                        <Text className="font-helveticaneue1 font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          {apiData?.data?.username}
                        </Text>
                        <Text className="font-helveticaneue1 font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                          {apiData?.data?.description}
                        </Text>
                        <Row className="font-helveticaneue1 items-center justify-end lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] py-[0] w-[100%]">
                          <Img
                            src="images/img_group_7.png"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] my-[0] w-[2%]"
                            alt="Group"
                          />
                          <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                            {apiData?.data?.location}
                          </Text>
                          <Img
                            src="images/img_vector_51.png"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] my-[0] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
                            alt="Vector"
                          />
                          <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_500 w-[auto]">
                            t.me/boburjon_mavlonov
                          </Text>
                          <Img
                            src="images/img_group_8.png"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mb-[0] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[2%]"
                            alt="Group"
                          />
                          <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                            Born November 24, 1994
                          </Text>
                          <Img
                            src="images/img_group_9.png"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] my-[0] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
                            alt="Group"
                          />
                          <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                            Joined May 2004
                          </Text>
                        </Row>
                        <Row className="font-segoeui items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[27%]">
                          <Text
                            className="common-pointer font-normal xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]"
                            onClick={handleNavigate5}
                          >
                            {
                              apiData?.data?.["public_metrics"]?.[
                                "following_count"
                              ]
                            }
                          </Text>
                          <Text
                            className="common-pointer font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]"
                            onClick={handleNavigate6}
                          >
                            {
                              apiData?.data?.["public_metrics"]?.[
                                "followers_count"
                              ]
                            }
                          </Text>
                        </Row>
                        <Column className="font-helveticaneue items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pl-[23px] xl:pl-[26px] 2xl:pl-[30px] 3xl:pl-[36px] lg:pr-[27px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] w-[100%]">
                          <Row className="w-[100%]">
                            <Column className="w-[28%]">
                              <Text className="font-bold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_901 w-[auto]">
                                Tweets
                              </Text>
                              <div className="bg-blue_500 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] ml-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] rotate-[90deg] rounded-radius151 w-[27%]"></div>
                            </Column>
                            <Text className="font-bold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                              Tweets & replies
                            </Text>
                            <Text className="font-bold 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                              Media
                            </Text>
                            <Text className="font-bold 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                              Likes
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="w-[100%]">
                  <Column className="items-center pr-[1px] w-[100%]">
                    <Line className="bg-bluegray_50 h-[0.65px] rotate-[90deg] w-[100%]" />
                  </Column>
                  <Row className="items-center lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[14%]">
                    <Img
                      src="images/img_vector_52.png"
                      className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[9%]"
                      alt="Vector"
                    />
                    <Text className="font-bold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_601 w-[auto]">
                      Pinned Tweet
                    </Text>
                  </Row>
                  <Column className="font-segoeui items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:pl-[25px] xl:pl-[29px] 2xl:pl-[33px] 3xl:pl-[39px] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                    <Row className="w-[100%]">
                      <Img
                        src="images/img_ellipse91.png"
                        className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                        alt="Ellipse91"
                      />
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[89%]">
                        <Column className="items-center lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] w-[100%]">
                          <Row className="items-center justify-end py-[3px] w-[100%]">
                            <Text className="font-bold font-helveticaneue my-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                              Jerome Bell
                            </Text>
                            <Text className="font-normal font-segoeui ml-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]">
                              ·
                            </Text>
                            <Text className="font-helveticaneue1 font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                              @afonsoinicente
                            </Text>
                            <Text className="font-helveticaneue1 font-normal ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                              1 min
                            </Text>
                            <Img
                              src="images/img_group544_33.png"
                              className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[171px] xl:ml-[196px] 2xl:ml-[221px] 3xl:ml-[265px] w-[3%]"
                              alt="Group544"
                            />
                          </Row>
                        </Column>
                        <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_800 w-[100%]">
                          <span className="text-gray_800 font-helveticaneue1">
                            The DesignLab is doing major work on
                            Community-Driven Design, with several different
                            variants. If you are working in this area, submit a
                            paper to the DIS conference here in San Diego (see
                            DesignLab posting below)....{" "}
                          </span>
                          <span className="text-blue_500 font-helveticaneue1">
                            https://facebook.com/don.norman.18/...
                          </span>
                        </Text>
                        <Row className="font-helveticaneue1 items-center ml-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] pl-[1px] py-[1px] w-[84%]">
                          <Img
                            src="images/img_vector_53.png"
                            className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                            alt="Vector"
                          />
                          <Text className="flex font-normal items-center 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] my-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                            61
                          </Text>
                          <Img
                            src="images/img_vector_54.png"
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] 2xl:ml-[85px] w-[4%]"
                            alt="Vector"
                          />
                          <Text className="flex font-normal items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                            12
                          </Text>
                          <Img
                            src="images/img_vector_55.png"
                            className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] my-[0] w-[4%]"
                            alt="Vector"
                          />
                          <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] my-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-pink_500 w-[auto]">
                            6.2K
                          </Text>
                          <Img
                            src="images/img_group_10.png"
                            className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] my-[0] w-[4%]"
                            alt="Group"
                          />
                          <Text className="flex font-normal items-center 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] my-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                            61
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-bluegray_50 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                  <Column className="font-helveticaneue1 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:pl-[25px] xl:pl-[29px] 2xl:pl-[33px] 3xl:pl-[39px] lg:pr-[11px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[100%]">
                    <Row className="w-[100%]">
                      <Img
                        src="images/img_ellipse92.png"
                        className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                        alt="Ellipse92"
                      />
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[89%]">
                        <Column className="items-center lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] w-[99%]">
                          <Row className="items-center justify-end py-[3px] w-[100%]">
                            <Text className="font-bold font-helveticaneue my-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                              Jerome Bell
                            </Text>
                            <Text className="font-helveticaneue1 font-normal ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                              @afonsoinicente
                            </Text>
                            <Text className="font-normal font-segoeui ml-[4px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]">
                              ·
                            </Text>
                            <Text className="font-helveticaneue1 font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                              Apr 1
                            </Text>
                            <Img
                              src="images/img_group544_34.png"
                              className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[174px] xl:ml-[199px] 2xl:ml-[224px] 3xl:ml-[268px] w-[3%]"
                              alt="Group544"
                            />
                          </Row>
                        </Column>
                        <Text className="font-normal lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_800 w-[auto]">
                          Qurantine days...
                        </Text>
                        <Column className="items-center lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[9px] w-[99%]">
                          <Img
                            src="images/img_image9.png"
                            className="lg:h-[214px] xl:h-[245px] 2xl:h-[276px] 3xl:h-[331px] rounded-radius16 w-[100%]"
                            alt="image9"
                          />
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Line className="absolute bg-bluegray_50 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] inset-y-[0] left-[0] my-[auto] w-[1px]" />
              <Line className="absolute bg-bluegray_50 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] inset-y-[0] my-[auto] right-[0] w-[1px]" />
            </Stack>
            <Column className="font-helveticaneue1 lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[28%]">
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
                      src="images/img_vector_56.png"
                      className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[5px] lg:mr-[12px] xl:w-[13px] xl:h-[14px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[8px] 3xl:mr-[19px] my-[auto]"
                      alt="Vector"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#5b7083"
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[13px] xl:h-[14px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder19"
                ></Input>
              </Column>
              <Column className="bg-gray_50 font-helveticaneue lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]">
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
                            src="images/img_profilepicture_37.png"
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
                            src="images/img_profilepicture_38.png"
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
              <Column className="bg-gray_50 font-helveticaneue lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]">
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
                          src="images/img_placeholder_9.png"
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
                          src="images/img_placeholder_10.png"
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
                          src="images/img_placeholder_11.png"
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
                  src="images/img_group544_35.png"
                  className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] w-[5%]"
                  alt="Group544"
                />
              </Row>
              <Row className="font-helveticaneue1 items-center ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[31%]">
                <Img
                  src="images/img_vector_57.png"
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
        <Line className="bg-black_900_14 h-[1px] lg:ml-[182px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mt-[133px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[205px] w-[51%]" />
      </Column>

      <ToastContainer />
    </>
  );
};

export default ProfilePagePage;
