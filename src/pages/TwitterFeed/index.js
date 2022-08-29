import React from "react";

import { useNavigate } from "react-router-dom";
import { handleSectionNavigation } from "util";
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

const TwitterFeedPage = () => {
  const navigate = useNavigate();

  function handleNavigate27() {
    navigate("/mytotaltweets");
  }
  function handleNavigate28() {
    navigate("/recenttweets");
  }
  function handleNavigate30() {
    navigate("/profilepage");
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
                  src="images/img_vector_9.png"
                  className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] ml-[0] w-[14%]"
                  alt="Vector"
                />
                <Row className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[52%]">
                  <Img
                    src="images/img_vector_10.png"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] w-[26%]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row
                  className="common-pointer ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[60%]"
                  onClick={() => {
                    handleSectionNavigation("block1");
                  }}
                >
                  <Img
                    src="images/img_vector_11.png"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] my-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Explore
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[92%]"
                  onClick={handleNavigate28}
                >
                  <Img
                    src="images/img_vector_12.png"
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
                    onClick={handleNavigate27}
                  >
                    <Img
                      src="images/img_vector_13.png"
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
                  onClick={handleNavigate30}
                >
                  <Img
                    src="images/img_vector_14.png"
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
                    src="images/img_profilepicture_14.png"
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
                    src="images/img_group544_13.png"
                    className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[6%]"
                    alt="Group544"
                  />
                </Row>
              </Column>
            </Column>
            <Stack className="2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[48%]">
              <Row className="absolute justify-between left-[0] w-[100%]">
                <Stack className="2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] w-[98%]">
                  <Column
                    className="absolute bottom-[9%] left-[0] w-[100%]"
                    id="block1"
                  >
                    <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                    <Line className="bg-bluegray_50 h-[1px] lg:mt-[300px] xl:mt-[343px] 2xl:mt-[386px] 3xl:mt-[463px] w-[100%]" />
                  </Column>
                  <Line className="absolute bg-bluegray_50 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] left-[0] w-[1px]" />
                </Stack>
                <Line className="bg-bluegray_50 3xl:h-[1112px] lg:h-[721px] xl:h-[824px] 2xl:h-[927px] w-[1px]" />
              </Row>
              <Stack className="absolute 2xl:h-[1057px] 3xl:h-[1268px] lg:h-[822px] xl:h-[940px] inset-[0] justify-center m-[auto] w-[100%]">
                <Column className="absolute justify-end left-[2%] right-[0] w-[98%]">
                  <Column className="w-[100%]">
                    <Input
                      className="font-bold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] placeholder:text-gray_901 text-gray_901 w-[100%]"
                      wrapClassName="flex w-[100%]"
                      name="Header"
                      placeholder="Home"
                      suffix={
                        <Img
                          src="images/img_vector_15.png"
                          className="mr-[1px] lg:w-[17px] lg:ml-[27px] xl:w-[20px] xl:ml-[31px] 2xl:w-[22px] 2xl:ml-[35px] 3xl:w-[27px] 3xl:ml-[42px] my-[auto]"
                          alt="Vector"
                        />
                      }
                      size="sm"
                      variant="FillWhiteA700"
                    ></Input>
                  </Column>
                  <Column className="justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] w-[95%]">
                    <Row className="font-helveticaneue1 items-center mr-[auto] w-[40%]">
                      <Img
                        src="images/img_profilepicture_15.png"
                        className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                        alt="ProfilePicture"
                      />
                      <Text className="font-normal lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_600 tracking-ls1 w-[auto]">
                        What’s happening?
                      </Text>
                    </Row>
                    <Column className="font-helveticaneue items-end 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pr-[1px] w-[100%]">
                      <Row className="items-center justify-end w-[90%]">
                        <Img
                          src="images/img_group.png"
                          className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                          alt="Group"
                        />
                        <Img
                          src="images/img_group_1.png"
                          className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[4%]"
                          alt="Group"
                        />
                        <Img
                          src="images/img_vector_16.png"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[4%]"
                          alt="Vector"
                        />
                        <Stack className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[12%]">
                          <Img
                            src="images/img_group_2.png"
                            className="absolute lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] left-[0] lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                            alt="Group"
                          />
                          <Img
                            src="images/img_group_3.png"
                            className="absolute lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"
                            alt="Group"
                          />
                        </Stack>
                        <Button
                          className="font-bold lg:ml-[198px] xl:ml-[226px] 2xl:ml-[255px] 3xl:ml-[306px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[15%]"
                          shape="RoundedBorder19"
                          size="md"
                          variant="FillBlue50087"
                        >
                          Tweet
                        </Button>
                      </Row>
                    </Column>
                    <Column className="font-helveticaneue1 items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] pl-[1px] w-[100%]">
                      <Row className="justify-between w-[100%]">
                        <Column className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center mt-[1px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                          <Img
                            src="images/img_profilepicture_16.png"
                            className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 w-[100%]"
                            alt="ProfilePicture"
                          />
                        </Column>
                        <Column className="w-[90%]">
                          <Column className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[100%]">
                            <Row className="w-[100%]">
                              <Text className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
                                Devon Lane
                              </Text>
                              <Text className="font-helveticaneue1 font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                                @johndue
                              </Text>
                              <Text className="font-normal font-sfcompactdisplay ml-[4px] my-[0] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]">
                                ·{" "}
                              </Text>
                              <Text className="font-helveticaneue1 font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                                23s
                              </Text>
                              <Img
                                src="images/img_group544_14.png"
                                className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[220px] xl:ml-[251px] 2xl:ml-[283px] 3xl:ml-[339px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[3%]"
                                alt="Group544"
                              />
                            </Row>
                          </Column>
                          <Text className="font-normal mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_800 w-[auto]">
                            Tom is in a big hurry.
                          </Text>
                          <Stack className="lg:h-[193px] xl:h-[220px] 2xl:h-[248px] 3xl:h-[297px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius16 w-[100%]">
                            <Img
                              src="images/img_placehpolder.png"
                              className="absolute lg:h-[193px] xl:h-[220px] 2xl:h-[248px] 3xl:h-[297px] left-[0] rounded-radius16 w-[100%]"
                              alt="Placehpolder"
                            />
                          </Stack>
                          <Row className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] pl-[1px] py-[1px] w-[83%]">
                            <Img
                              src="images/img_vector_17.png"
                              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                              alt="Vector"
                            />
                            <Text className="flex font-normal items-center 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] my-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                              61
                            </Text>
                            <Img
                              src="images/img_vector_18.png"
                              className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] 2xl:ml-[85px] w-[4%]"
                              alt="Vector"
                            />
                            <Text className="flex font-normal items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_600 w-[auto]">
                              12
                            </Text>
                            <Img
                              src="images/img_vector_19.png"
                              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] my-[0] w-[4%]"
                              alt="Vector"
                            />
                            <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] my-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-pink_500 w-[auto]">
                              6.2K
                            </Text>
                            <Img
                              src="images/img_group_4.png"
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
                    <Text className="font-helveticaneue font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_500 w-[auto]">
                      Show this thread
                    </Text>
                    <Column className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] pl-[1px] w-[100%]">
                      <List
                        className="gap-[0] min-h-[auto] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="justify-between xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]">
                          <Img
                            src="images/img_profilepicture_17.png"
                            className="lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[38px] xl:w-[43px] 2xl:w-[49px] 3xl:w-[58px]"
                            alt="ProfilePicture"
                          />
                          <Column className="pt-[4px] w-[90%]">
                            <Column className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[100%]">
                              <Row className="w-[100%]">
                                <Text className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
                                  Darlene Robertson
                                </Text>
                                <Text className="font-helveticaneue1 font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                                  @johndue
                                </Text>
                                <Text className="font-normal font-sfcompactdisplay ml-[4px] my-[0] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]">
                                  ·{" "}
                                </Text>
                                <Text className="font-helveticaneue1 font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                                  23s
                                </Text>
                                <Img
                                  src="images/img_group544_15.png"
                                  className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[175px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[3%]"
                                  alt="Group544"
                                />
                              </Row>
                            </Column>
                            <Text className="font-helveticaneue1 font-normal mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_800 w-[auto]">
                              All set for new house warming..!
                            </Text>
                            <Img
                              src="images/img_placehpolder_1.png"
                              className="lg:h-[193px] xl:h-[220px] 2xl:h-[248px] 3xl:h-[297px] mt-[4px] rounded-radius16 w-[100%]"
                              alt="Placehpolder"
                            />
                            <Row className="font-helveticaneue1 items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] pl-[1px] py-[1px] w-[83%]">
                              <Img
                                src="images/img_vector_20.png"
                                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] my-[0] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                                alt="Vector"
                              />
                              <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]">
                                61
                              </Text>
                              <Img
                                src="images/img_vector_21.png"
                                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[4%]"
                                alt="Vector"
                              />
                              <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]">
                                12
                              </Text>
                              <Img
                                src="images/img_vector_22.png"
                                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] 2xl:ml-[85px] w-[4%]"
                                alt="Vector"
                              />
                              <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-pink_500 w-[auto]">
                                6.2K
                              </Text>
                              <Img
                                src="images/img_group_5.png"
                                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] my-[0] w-[4%]"
                                alt="Group"
                              />
                              <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]">
                                61
                              </Text>
                            </Row>
                            <Text className="font-helveticaneue font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_500 w-[auto]">
                              Show this thread
                            </Text>
                          </Column>
                        </Row>
                        <Row className="justify-between xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]">
                          <Img
                            src="images/img_profilepicture_18.png"
                            className="lg:h-[39px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[38px] xl:w-[43px] 2xl:w-[49px] 3xl:w-[58px]"
                            alt="ProfilePicture"
                          />
                          <Column className="pt-[4px] w-[90%]">
                            <Column className="items-center lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] w-[100%]">
                              <Row className="w-[100%]">
                                <Text className="font-bold font-helveticaneue lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 w-[auto]">
                                  Darlene Robertson
                                </Text>
                                <Text className="font-helveticaneue1 font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                                  @johndue
                                </Text>
                                <Text className="font-normal font-sfcompactdisplay ml-[4px] my-[0] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_600 w-[auto]">
                                  ·{" "}
                                </Text>
                                <Text className="font-helveticaneue1 font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                                  23s
                                </Text>
                                <Img
                                  src="images/img_group544_16.png"
                                  className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[178px] xl:ml-[204px] 2xl:ml-[230px] 3xl:ml-[276px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[3%]"
                                  alt="Group544"
                                />
                              </Row>
                            </Column>
                            <Text className="font-helveticaneue1 font-normal mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_800 w-[auto]">
                              Tom is in a big hurry.
                            </Text>
                            <Img
                              src="images/img_placehpolder_2.png"
                              className="lg:h-[193px] xl:h-[220px] 2xl:h-[248px] 3xl:h-[297px] mt-[4px] rounded-radius16 w-[100%]"
                              alt="Placehpolder"
                            />
                            <Row className="font-helveticaneue1 items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] pl-[1px] py-[1px] w-[83%]">
                              <Img
                                src="images/img_vector_23.png"
                                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] my-[0] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                                alt="Vector"
                              />
                              <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]">
                                61
                              </Text>
                              <Img
                                src="images/img_vector_24.png"
                                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[4%]"
                                alt="Vector"
                              />
                              <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]">
                                12
                              </Text>
                              <Img
                                src="images/img_vector_25.png"
                                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] 2xl:ml-[85px] w-[4%]"
                                alt="Vector"
                              />
                              <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-pink_500 w-[auto]">
                                6.2K
                              </Text>
                              <Img
                                src="images/img_group_6.png"
                                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] my-[0] w-[4%]"
                                alt="Group"
                              />
                              <Text className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_600 w-[auto]">
                                61
                              </Text>
                            </Row>
                            <Text className="font-helveticaneue font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_500 w-[auto]">
                              Show this thread
                            </Text>
                          </Column>
                        </Row>
                      </List>
                    </Column>
                  </Column>
                </Column>
                <Line className="absolute bg-bluegray_50 h-[1px] left-[0] top-[16%] w-[100%]" />
              </Stack>
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
                      src="images/img_vector_26.png"
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
              <Column className="bg-gray_50 font-helveticaneue lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]">
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
                          <Row className="font-helveticaneue1 items-center w-[61%]">
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
                          <Row className="font-helveticaneue1 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[69%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              Trending with
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
                              #covid19
                            </Text>
                          </Row>
                        </Column>
                        <Img
                          src="images/img_placeholder_3.png"
                          className="lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[22%]"
                          alt="Placeholder"
                        />
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-bluegray_50" />
                      <Row className="justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                        <Column className="w-[73%]">
                          <Row className="font-helveticaneue1 items-center w-[53%]">
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
                          <Row className="font-helveticaneue1 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[64%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              Trending with
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
                              #trump
                            </Text>
                          </Row>
                        </Column>
                        <Img
                          src="images/img_placeholder_4.png"
                          className="lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[22%]"
                          alt="Placeholder"
                        />
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-bluegray_50" />
                      <Row className="justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] w-[100%]">
                        <Column className="w-[73%]">
                          <Row className="font-helveticaneue1 items-center w-[39%]">
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
                          <Row className="font-helveticaneue1 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[61%]">
                            <Text className="font-normal lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                              Trending with
                            </Text>
                            <Text className="font-normal ml-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
                              #sport
                            </Text>
                          </Row>
                        </Column>
                        <Img
                          src="images/img_placeholder_5.png"
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
              <Column className="bg-gray_50 font-helveticaneue lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[8px] xl:pt-[9px] rounded-radius16 w-[100%]">
                <Text className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_901 w-[auto]">
                  Who to follow
                </Text>
                <Column className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                  <Stack className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                    <Stack className="absolute lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] right-[5%] top-[10%] w-[74%]">
                      <Text className="absolute font-bold left-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_901 top-[0] w-[auto]">
                        Bessie Cooper
                      </Text>
                      <Stack className="absolute bottom-[0] lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] left-[0] w-[100%]">
                        <Text className="absolute bottom-[0] font-helveticaneue1 font-normal left-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_600 w-[auto]">
                          @alessandroveronezi
                        </Text>
                        <Button className="absolute font-bold font-helveticaneue right-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center top-[0] w-[31%]">
                          Follow
                        </Button>
                      </Stack>
                    </Stack>
                    <Column className="absolute lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center left-[5%] rounded-radius50 top-[2%] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                      <Img
                        src="images/img_profilepicture_19.png"
                        className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 w-[100%]"
                        alt="ProfilePicture"
                      />
                    </Column>
                    <Line className="absolute bg-bluegray_50 bottom-[0] h-[1px] left-[0] w-[100%]" />
                  </Stack>
                  <Column className="items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]">
                        <Img
                          src="images/img_profilepicture_20.png"
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
                  </Column>
                  <Line className="bg-bluegray_50 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                  <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]">
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
                  src="images/img_group544_17.png"
                  className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] w-[5%]"
                  alt="Group544"
                />
              </Row>
              <Row className="font-helveticaneue1 items-center ml-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[31%]">
                <Img
                  src="images/img_vector_27.png"
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
    </>
  );
};

export default TwitterFeedPage;
