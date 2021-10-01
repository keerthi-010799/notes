import React from "react";
import Listednotes from "../Listednotes/Listednotes";
import { useState } from "react";
import {DragDropContext,Draggable,Droppable} from "react-beautiful-dnd";

const Noteswithcheckbox = (props) => {
  const [input, setinput] = useState("");
  const [inputlist,setinputlist]=useState(props.list);
  const changeinput = (e) => {
    setinput(e.target.value);
  };
  const inputHandling = (e) => {
    if (e.key === "Enter") {
      props.list.push(e.target.value);
      setinput("");
    }
  };
  const draglisthandler=(result)=>{
      if(!result.destination) return;
      const uncheckedlist = Array.from(inputlist);
     const [rearrangedorder] = uncheckedlist.splice(result.source.index,1);
      uncheckedlist.splice(result.destination.index,0,rearrangedorder);
      setinputlist(uncheckedlist);
      console.log(inputlist);
      props.changedrag(inputlist);       
  }
  return (
    <div>
      <DragDropContext onDragEnd={draglisthandler}>
        <Droppable droppableId="checkedlist">
          {(provided) => (
            <div
              className="checkedlist"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {props.list.map((listitem, listindex) => {
                return (
                  <Draggable
                    key={listindex}
                    draggableId={listitem}
                    index={listindex}
                  >
                    {(provided) => (
                      <div
                        className="dragitem"
                        key={listindex}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <img
                          style={{
                            display: props.showdrag === true ? "flex" : "none",
                          }}
                          className="dragicon"
                          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMCAyMCIgZmlsbD0iIzAwMCI+CjxjaXJjbGUgY3k9IjUuNSIgY3g9IjcuNSIgcj0iMS41Ii8+CjxjaXJjbGUgY3k9IjUuNSIgY3g9IjEyLjUiIHI9IjEuNSIvPgo8Y2lyY2xlIGN5PSIxMC41IiBjeD0iNy41IiByPSIxLjUiLz4KPGNpcmNsZSBjeT0iMTAuNSIgY3g9IjEyLjUiIHI9IjEuNSIvPgo8Y2lyY2xlIGN5PSIxNS41IiBjeD0iNy41IiByPSIxLjUiLz4KPGNpcmNsZSBjeT0iMTUuNSIgY3g9IjEyLjUiIHI9IjEuNSIvPgo8aW1hZ2Ugb3BhY2l0eT0iLjEiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBY29BQUFIakNBWUFBQUNqUDE4aUFBQUFDWEJJV1hNQUFDNGpBQUF1SXdGNHBUOTJBQUFBIEdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQVBoTkpSRUZVZU5yc25kdlBKTWQ1bjd2bnNBZUogM09WQmxKUWdraDJFc0hVbnhZYVJ5eGk1OHArY1N3TzVpSUU0dHBPTElBaDRvWVNDdlpSRWtic1V1ZnoybTBPNlpycG1xbnY2VUllMyBxcXQ3bmdjWTdWTDdmWFBvN3FsbmZtKzlWVk1VQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUN3S0VvT0FjQXMzb05IRGhVQW9nVGcvU1FMY2dWQWxBQzhYeEFwQUc5OEFONFggQ0JTQUFRR0E5d0R5QkdDUUFPQjZSNTRBREJ3QVhOdklFNERCQklEckdaQW1NTEFBY1AwQzRnUUdHZ0N1V1VDYUFBdzZ3SFVLU0JPQSBBUWk0UGdGaEFqQVFBZGNrSUUwQUJpWGdXZ1JBbU1EZ0JGeC9IQUpBbXNCQUJjQjFCd2dUR0xBQXVONEFZUUlERndEWEdTQk1ZQUFEIDRQb0NoQW5BUUFaY1Y0QXdBUmpRZ09zSkVDWUFBeHR3SFFFZ1RHQ0FBNjRmQUlRSkRIVEFkUU9BTUlFQkQ3aG1BSkFsTU9nQjF3b0Egd2dRR1ArQWFBVUNZd0NBSVhCOEF5QklZQ0FHNExnQVFKakFnQXRmRGtvOHBnenZIRkJnWWdXdUI0OGFnejNFRDN1VEFOY0J4UWdRYyBKK0RORDV4L2pndFM0TGdBQXdKdzdqa1dDSUpqQVF3UXdEbm5HQ0FMamdFd1lBRG5tOWNPQ0lQWHp1QUJuR2RlTnlBT1hqY3drSENPIGViMkFQSGk5d0tBQ2QzZCt1WTZSQ0s4VEdHQ0FjOHYxaTBoNGpjQkFBNXhUWGgvUzVQVUJndzV3UG5sdGNCZENRWllNUHNDNTVIVUIgVWtHV0RLN0FlZVQxQUhMaDlUREFBdWVRMXdJSWh0Y0NERXljUDE0SElCbGVCekJBY2Q1NEhUbnhZZlVhL3lyaS9mK2h1djM5L1F6QyBSMTRETUZBQmtwd1pQNjV1ditwNUxZZjZSWDRROGZFZnE5dnI2cmJ0K2ZjMzFlM3ZLR0h5T29EQml2UEZhNWhLaXB2cTlzT01uL091IHVuMjdUSG1TTG9GQkN4WjN2bWIxM09jb3hUdVY1NXhsZ3lnWnZJQnpOYS9uYmM0bkxrV0tQdktjNmJ6blhLV0RMQm5FQUVuT0l6V20gbUUrY0MrMTV6eG1sVFdRSkRNQ2NJNTR6cVpHMHVWRHhJRXNHTkxpVDg1TzFJUCtTMUNpV05yOUJtRHhmQm1MZzNNei8rZXIwU0ZrMSBuakMzK2FkTVpBbUlrdlBDY3lVOWtqSVhKaUJreVNBSFNETE9jNmtFV1NESXJJU1oyNkEvRndFaFNnWTZXTUE1eVU2UXZ5ek9aVUFFIG1ZY3d2NjZsK1k4SUUxa3lLQU9TUkpBd1MyRWlTMENVbkl2RlBzZlpDRktKNG84SmpwbGE1dkoreG9OcXhzSkVsb0FvT1E4SWNrb2ggcWhGdW4ramtyR2NnVUlTSkxCbWdBVW5lZ1NDN3BKaEtpQklDelVHZW1RcVQ5YUNBS0RrSHMzdHVXUWl5TGNaY3BlZ3J6eW5GbWFFdyBrU1VnU283L0xKN2I2WEdWR1A5cUFrRXVUWXh6RUtjNjVyK3ViditVaHhpUUpTQktqbjMrZ3Z4VjRoUnB5bkhwWW5RUlowcHA2blQ1IE5jSkVsZ3lLa1BteEw2ZDZ6TlNDUkk1NVNyTkhtTWdTVVRKWWM5eVJaS295cXhZa2N2U1Raa3BoL2pxUGRJa3NBVkZ5ekNkNVRrbFQgNU9UcDhiM3E5bW1FKzYxZVZQSFpjbE5tUnVWWVpNbWdEVWh5bVNreVdYb2NFK0dtL2hscGRyVXNKeEpwcXBTWlNicEVsZ3pjY0tmSCB1MHo5V0xGVFpQVDAyQ1hGV0NLTUlkSUk4a3lSTWpOSmw3bUpDVkVpU283MUVpVVpLMFZHUzQ5dE1RWktjVjg5dVljSC8yTy9XaFhGIHMyY0JBMlJibnNMaWpKMHlNMGlYeUpMQkc1RGt2RktrdUNBRnhEZ2t3MlAxUkErSGdBTmFubVVwSnRGSTRvd3B6QXpTSmJKa0FJZUYgSCtma2tveVJJcU1KMGxHTVhWSU1sYUdrUkozbHFjVTVFMkZPbUM3NTJqQUdjQ0JONWlsSlVVR2E2ZEZDa0RsSk1ibzh6YVFwSU0xWSB3cHhRbHFSS0JuRWdUZVlweVcrcSt4Y1RwS01jL2FYNGcrcjJieUljNnJmVjdmTWdlVHBKVTBpWVQ1RWxvbVFRaHp1VlpMVDVTSkVVIGFaa2UyNm5SWG81RE1selgveTZOT2hyZkJVbTBuVGdIeFNtVU1tT2t5d25uTFpFbEF6a2d5ZWxTcEtnZ1I5S2pGcVNkR0x1a0dFdUcga2hJZGw2Y1c1MmpTRkVpWnNZUTVRYnBFbGd6bU1QTmpPMXRKQnBWWkxRUnBYMVp0aXpFM0tmcktzMStjMXVWWklXRktsbVB2WEphSSBFbEZ5WERON0x1S1NERTZSRG9Mc2wrTlN4Q2dqVHF1VUdTaE02WFE1Z1N4SmxRem9RSnE4dlcvSitjallnclJMajFxUVN4V2pyVGlIIGhUbVlNak1TNWdUZlJFS3FaRUFISkJrdlJRYVhXWDh4TEVpNzlKaFdrSWZxQ2UxMnU5SHpWRmFHMm02M0NRYy9NMmw2cGt3bHpGZEYgRnVYWWpuU0pMQUZSY2p6dlJKSURLZEpla1BIa09DYkNZL1hrMU0yR1ZkOTJQTkZGYXBjeU80VXBrQzRqeWpLbVRIS1FGS0pFbEJ6UCBxVVFwSmNtZ1VxdTNJT09seHk0cHVvZ3dsTFpJNWVVNWpUQ2xTN0dKa2lXcGtvRWRrT1RFS2ZJWHZvS1VrZVBVVXB4V25vSEM5Q3pIIFNxVkxaQW1Ja21PNVhFbjJwTWhVZ2pUbG1LTVVYZVVaTGsxUFlRYW1TMlNKS0JFbHgzR3hrdlF1dFk2VVdiLy92aWhqQ1hJcGNvd3IgelhGaGJqWnk2VktxRklzc0FWRWl5dXdrNlowaXZjcXNmK0l0eUtYTE1aNDArNFdaYTdwTUpFdEV1UURXSEFJa09SZEo2Z1M1MjUxVCBaTk5oU296L3RycDk2Q1ZKSmNqSHg4ZHl2OStYOXlUSXkwaGF2MloxcTQ1RnFXN3J0Y3Z3c0tyVjlheTZ2YWpQd1J2ai9zODNkZTZxIDgxaXFsSG42bFdmMWp6NnBibjl3VjNOMUs1OEdESDR2NnFmd0t1TDdpREZxL213NEJJaTY3ejVETnhMd2t1VEFYS1IwbVRXSDlLZ0cgNlo4Ty9QdjMxMEU4R1lmNklGZkhvM1JQbWV0enpydWNpODhic2xUblVkMjlPcGVYZExtcEQ4SjdidWxTL2ZKRGZiMzZKc3VPYTd5TSBrTUJpM0Nmd1NZUGpOL2MwNlMzSmpoUXBYV2JWZ2t3aHh6RVI2bEExbEpvZU1oQ3BLczI2bDJVOXk3R09jNWVoWlZoS3NJQW9sMzM4IHNwTmtVTlBPTCtLbXlOaUM3SktpS2NKOTlaanZMSGJpR1pWV1pabW5tODJ4VDZReDVSbERtRGZOUHA2eURHbnl1Uk5aSWtwRVNack0gUVpJU3BWYnBGQmxMa0cweGFpbjJDZkUwL3lmdytHWFJ2Vk9QRm1oYm5qSEU2Uy9NTCszU1pVQlhyRys2VENCTFVpV0RQY2Z1bmlXcCBlRmZkWHJzOHI4Z3BVbHFRdG1LVUVtS29RRk9JMDEyWUR1blNzeXRXZmViNk1OOHlMS2x5aHRETWd5UXZoRFR2NkpKclBFbmFwOGhZIGdteUw4VmdQOTFPSnNXc0UzQnNIVC8zdG9CdHlESEhxM2xRSllacU5QM2JDSEc3MjJlMk1ScDlOZlVIcWE4UlNsdnU2c3VHVEtpVysgQ2NmaXZYdWNlT3hBbGlSS1JKazZUVHFYWEZ1UzdDKzErcVZJdGN3alZKQm1lbFNDM0JxcE1SY3hoaVJPSmMxTkpjMEg0WlNwbHBTRSBwa3VKVWl3bFdGS2xKS3lqUkpLVFMxS255TnQxa1g5Uy8rRFdXcEI2SFdTSUlKV2ExZnE2NTBvbzFYM3RLMEh1cXZzOTZMV0dNNzU0IEcrc2xxeFM0cm03UEt5TTlxWFBlczNObElPais3ZGRobW1zdjFUbStYWGRabmRicm1rdkg5WmErNnl3VHJLOHM3M3dNUTVTSWNsYVAgbjQwa205aVhXbU1JOG9tV1l6WFlYd1M1d0F0WkMzTmZ5WEt2eEZiOStZTkttcUhDZE4rNFlOVXBTeTNNaGNvU1pnUnpsSGYrU2RCMyBUc1pKa2oyZHJWS1M5QlZrWDNuMVlhYWxWUytwRmRkNVRUMm51UzdMNHVWbWM5VExXbnpMc29mcnlTM3Q1aTQvcnY4K01tK3BUOXBuIGRxL1BkMU9DeVBPVnpGV1NLQkhsWE5Ma1h4YkRDOTZIUHFtL3RYaytPa1crcUpOQXJ5VHR0NkFMVFpIdDlIaFFjNDhMVDQvT2FWQTEgNXdpbFRQdDBxWk5sOXhaNEljbFM4ZHpqdVQ4aFZRS2luSlVvc3lxNTZrMEZSbEVEMnMrYmd0Ujd0ZDZteVBINXlKQVUyVmxlbldEdSBVVDNldTBvYXA1S253NjE2ZnFlMGwxS1k1bHhtaURDTis3T1FaZis4cGE4czZ3MHdKRXF3Uy9yZ0RZaVNOTmxISmNjeXlieWs4dDZmIFhaT2trdU83ZCtmdTFsdEp4a3VSZzRLY1FJaUg4KzMwMkM2M1F5MnQxQUtWRnFaYnVwU1RaZWg4NWZPekxFdkdORVFKZDVBbTFTRDMgaXhTUzdGa0M0aXRKM3hUNXJ4TUlza3VLUTBMMGxwYWxRR1BJczB1WTIranBNaDlacXQvOWRZVDNJME1yb2tTU0dhYkpaUE9TZzQwNyBjU1ZwcGtqVnBQTlEzWWUwSUUwNTlra3hGVVB5bEphbXNaR0RSRGsydVN5TFFtUytrckVOVWNJUzArU0hnU1ZYcTNuSmlTVTVWR2FOIExjZmNpQzFOaVhMc0ZMSU1uYStNVUlKRlZvZ1NVV2J5MlBGTHJrS1M5SjJQakZsbTFZTE1YWTYyMHBRU3BrUTUxbTdlVWxhV1FpVlkgUUpTd3BEVHBXM0oxbXBmczZIRDFsYVJ2aXBRc3MvYWx4N2tUSTJXR2xtUHQ1aTB0Wlhrb3JPcWp2cko4c3J4VVNhSkZsRnpBSVduUyBhVjZ5MWVINitHaitYanhKZHFYSWUwNlBVNlpNaVhUcEkwdjF0TGQ2WmRHbWlEcGZHYkd4QnhBbGtweGptdlNkbDJ4MnVNYVZwRlNLIDdCTGt2U0FwekhhNlRDWExsUE9Wa1JwN1NKV0lFbEZPOGRpK0RUeXk4NUx0YjNJTWsyUmZxWFZPZ2xTdmRYZDl6Tkdia3RjcXdXWUQgMHNJc3drcXhJN0pVRjltWHh1K2ttNjljOE5wSzZJQzlYaGN1NkUzaDErVmFmOUlXa0tUK3FpdzVTZW9VR2JvdnEvcTl4MHBXK3U4eCBoZGgxZkoyV3ZOVGl1TGxRMU5kbHJWYmlUNzZXNVVtWVN0QmJqOGRRdjdDckxncHovOWpDSVlYdDk2Y3JjR0NmV0hWdC9helFlOE4yIDdndjdudVh6OURoR0tzKytqUFBlWnc5V0VpVnBNbVdhL0lzaVlzblZhTjQ1Uzg5dFhqSkVraUdsMXBnSnNwMFVUODB5UXVzck8zZnMgcVFVYUszbEtKTXlRVXF6NklKQml2aktrQkx1Z1ZFa3lScFN6dVdqRUh2Zjk2cjZpTmZDMG1uZDg1aVZQWC9HMDMxdTkzaTVKaHFSSSBTVUdhY215TE1RVjk0cFNVNXZHYXVyM0xzVDZ5VERsZldSVEJqVDBJQzFFaVNkS2tJY25Ca3F0OTgwNHFTYlpUWkN3NTVrQk1hVXFrIHl4U3k5Sm12SkZVQ29yeWpOUGxKZGZ1TCtodENYQ1ZwMWNBelduS1ZhOTQ1M2RONThzbHI2WWQwbVZVTE1qYzUya3BUUXBpaDVkaDQgc213Mjl6UktzSmJySzMwYmU5NnZQemYrTTJNUW9rU1U4M2hjVlhMOWM0L2ZreXU1L3J6bys3b3NWMG5xTlpMdjFDNDlIdWxIb3N6YSBsUjduaUhUS0RDbkh4cEhscHVndHdlcC9qbCtDUlRTSUVrbm0vdGdxVGY2eXVwOWNTNjYyODVLTmNtdVZKa01rZVMvcGNhcVVtVktXIHJzMDlLVXV3Vy9sVUNabkE4cENGQ1hybFVYSTFCb2Z4cStVOWM2QTdsMTJibjd2QzV5VkQ1aVFsbG54b1FUb3Y0WmdocDJOVUN6TmsgcVVsMXZKeVhrdWpsSStyYXQxMDZvcStoL2lVajYwWWV2TGxHTFphTWhDd1hlZi82WGo0S2pRbkhpY1lpbHFpUUtMTk1sUG1ueVFRbCBWd2xKK3BaYTJ3a3laY0xyMm53ZzFTWURoVkRDOUMzRnVpYkxGQ1ZZVWlXUUtFbVRibW15VlhLOS9hUXVzMTVTU3BLK0tWTDlma3hCIGFpSDIvVnZuYytyYlpLQXNvenhSblREVnc0U2tTL1g3UHNueVdaMHN4eGplakVBSjlPUDY3NStUS29GRVNacE1rQ1piWGE2M2FYSzQgeTlWMlhsSjlldjh3c1NSanBzaXVwSGdVdXQvWXlUTTBYZm9teTFKZHcxV3lsSm12YkhiQmtpcG5NUmFTS0NFZTZzMGNMVTErMnBUayBiUVBQK0JaMVk4OURxZlluZFZTMUZWN0lmR1NNZWNpdXhEaDZ6MnBVZlRIeVNlYk5jQUp0SjArcHhCazZmK2s2YjZsK1lGVTludDRXIExueSs4cnJGWGVmMmR2cXozV2Z5cWZJamhpUVNKWWt5cjhmOGNYWDc5OVg5UEVtUUpwdHJKbVc2WEgwN1hMV1lYSTBnWFdZMWs2T1YgR0Qrc0Q5a1A2aGYvcEg0bmR0MDI5Yy9vbjFlLy8yQ1hPS1dTcHZGaHd2bis5UEdvSkd0N2NrNlBZenRmNmRvRjY3cTIwamRWMW5zcyBsNzhoM1pFb2tXUWVxSEgyaDRuU3BDcTVOajluaFhXNStzNUxtbWx5aWhUWlRvL1d5YkVzK3ZxZCtzZjZKNjEzN0xZL2FiYmxwcE9tIFJNcmMxM09QcnNsU255dmJWT2t5WCtuYUJhdGV3aVZWbXRlNGNLcmNqQlFLZ0VTSktPOG1UWVozdWZyTVMvck1TVXFsU0tmMGFDWkkgTXptR1hqRm0wclJJbUpJcDAzZnUwblhPMG1XKzByVUxkcWFwa3ZBd0lTc093YnpKTlUwV0Zxa3RaRjR5dFNUVmI2cjd1Q1JTRzBHcSB4c3VYOVVuYVJuam42azFHUDdhTEwwZmorTzA2dW1sZHBLZlM1YzR4MGFzNVM5c3FnSHF1WlQxZitWUExjenljQjI1VFpkKzFubW1xIFJGb2tTaEtsRDJvQStVLzFwMTNSTk5teEhNUW5UWTQ5ajB1YXRKeVhkSldrUkVmcjVBa3k0NFRwTTIvcGxDejF6MWFwOHV1WnBrcmQgVHZRWjQrdXNZWTV5eHAvV3R1YzNzUE56SDAyVHJYVm16VFE1M3NBVEswMGFBMjMwRkduT1FWb0wwbklPMHZjTGY5VUhuTmRqQ2ROeSBEbE8vTGoyUDZUdUhxWktsYTFlczlUbXNmL1pwL2FId2xjVTVIODRFMTdXVnFlWXE2MGVlODFwSTFuRWl5bm5MV1YyOTd6d0cyejhPIFBYWkhHYXE1WUZ1NGdhZEtrN2FEcTNYWlRraVNFb0xza21MN1IwL0pkOSsxc1VEMUJsMWY1YlBwZUlnYmVRWUljNmNhZFR4azZicEogZ1V0emo3cWVkdFUxWXJQRm5VdGpqODhtQk9yRHBmcDJuZmNkeEhHb1R3SFNtamVVWHFkTGxFR1A2ZHZFTS9vTklZT2JDd3lYWFBXZyBQN1ljeExXQng2WGtHaUpKcnpLcm5vTmNOLy92aitxajlieG9ydjVRNndRUGxSUVBoK3R0Znl3YVgvWjgzYlQ4ZEx2ODNMRzZWYjlmIENhYnNYRDNTcUxxYUpkbDFrYVFjNjFLS2RTbkJIaDFLc01QTFJjeVBHMjlxdWJwL3U0anJONHNzb0tubjdpRlJ6aFRmSnA1QkVxVkogbDVLcjg3eGs0YmYwSXpSRm1zblJUSXduY1J0cDBmWDUzYnp1a3p3UHBaazZuOVNwMDB5Y2w2UzVxa2YyUk9uUzViWFpiblhuVW9LTiBuU3A5QjFtV2lwQW9TWk9KSHpOYUUwL0tOR25ad0RPMFAyclg0N3QyWW5wdEZsQTM2bXpYM2NseFZaZFN1OUtpQkgycHN6RFNaaU5wIFZrZmtJVkc2ckYrajArOVliVWFRU2FyTW9LbUg3bGNTSmRnR0d2RW1ub3pUcEswa1hVdXV6aW55NWZsUC9kZSs1Smo2NjdrdXg5SkkgbTExSjg3SHkwZXNFNmRKbFl3TGIrY3BjVXVXZE52WGMvZHdvb3B3aFVacDRCZ2VJNGYxY1RWbU5sUzljR25nYUVzaEFrbW81UVpjZyBWWHIwbDZNNjhPOFAvTHNhbHIveGxxWnVDTHIwOTF
                            TeWZLeis0N1YrNTcreHU4L1lzclI2YlhWamo4Mk9QZVBuNHJvUGJPK0h4cDc0IGwwRlREeVNHMHV2TVNxKytaZGZSSnA3V0Y0QTB5NjdEM3c1aW15Yi9sYnJnVHNsci9KdEVkTkt3TGMvdUhSYXl1NVphdDlXVC8yamIgTEs5cVFlclNxcDhnWHhiWENjU2h6VjcxamdWdUg0L00wdXhwamFGWmxsWHJDRGQxU1RaU0tmYlVUMlJSVnRYbFdwdkdIbVgrcCt2MSA2RDZ3NCtzcW05OHUwaWkvV3F5ckxBcjNwaDdXVkpJb0laR1lmY3V1Z3d5V1hkT25TZGN1MTUyakpHMVQ1TGJ5Mk10dHJBUzVzbno3IGxZWW9OODRKODVMWXVoSm05UlMyMVdqL1dOMzE2d2lsMkVOOWJteFNwVzFqVDR4VWVUeCszaXkvV3FUS2dHUWlVY1prbVVoaTduMEwgdTlsTmpLY291elkzR0VnL04za1ozQzBHUXR1U3E0OGtQOWcyZDUvVDg1Q0hjMXJ4RU9TSHhYVTl5Y2JqVXRWNzFuMVlESmRyKzQvcCAvcUJFZi81Z2NWcHlXZjNQOCtwdVg2cTd0V3pOZEhudExsdmRIU3pQb3psWE9TYlY0V3Z6T2xkNXM2M2R5RnlsTHI4NkhmK0M4aXVpIGhPaW9nZUd2UGVYcTM4UVRQbkQ2cEVuYjEzVjAyS25INWlmVlBPU1Bha2syQkxrN2xFcVM2UVVwTDB3bFMvVjZUR0Urci83blI5VmQgdnJUY005WmxyOWlqOERmQ1hGS2w0R04zWHZNRGU4RDZOdldvTS9ZM2hBcEVDZkV1TmpVdy9GajZHUVUwOFV5ZEpsMUtybnVMZ1YxSiA4b1BLWjA5cVNacUNkRStSMG9LVUZhWk9sMXFZbDNScEtjdFRXZFZTbGdlSGM1VStWZXFaUTlmM2hoOVBDcnROM2hGWFhqQkhPU05VIEt2ekNjKzJrOVdNNGxGMm5TcFBTSmRkVE4rdUw1a2JadXN6cWx5QmQ1aUJiOGxmN3BoWkZZZitkajJGem1IcitzdnBicWVZdVY3VXMgMVhGNHJDNmUxMjlHQkdnNVgybmJCV3U3WEVSdXJ2SzIvSHJaLzlYaS9lamEvZnJ1K241a2puRkczSHZYYXptWHg5UGRydThrdTEzViBwK1UvS3hwZkRIejlscER3YndoeDdYUzEzVnpBdHN2VlZwS25GRmtkQTkwZ0dTYkplckhsU0xGR1MvRmczb3JyNWdUcTcrYS9xUTdPIDRXNVRjOCs2VmVIY0lYdCtxZVZxVlo0K01LaGpvYnBBMVo4UEkxMnhhK0V1MktLdzI0VEF0Z1BXWlFPQ3hyZUs2SDhhMmRiT3BmdFYgSGVhbkJkMnZKRXFJZ2k2N2ZpNTk5ajJiZUtaTWt5NDc5WXlwYnRWS2tYNGRyZU1wOHRoUnFoeDZqUGEvNmUvRE5LWFRuYzdLZXVoMiBUNWVxRkd0MnhpcFhiYmNXSDBhcTF5WFpCU3VkS2wwMklMaEpsWG1YWHlFUjl6eEhPYXNhdjNqWlZhQ0paMHpzVWVZbUxTVm1NeStwIEpQRGlSVE5GK3MxRmRzOUQ2aEt4L3FMa2VtM2Y1ZWFLK2J1WEwyRHUvTkJnemwvNnpWM3FSaCtWS3NmbUxGM21LNC9DMTRMdFhHV3MgcGg2ZjdsZVY5WDgzenpuR3U1MFhwWmxuSmhlWno3S1F3VzdYeUUwOHVhZEpYWEpWZi9xVldzMW1uVzVCdHVVb2paMHcvWnA5dEN4WCBsZzArTGdLME9ZZlNIYkN4bW5wOHVsOEZsNG5RMElNb1FlTzdMTVJwWUJRdXV4WVpwMGxUa2k3M081WWl1d1NaZ21GaCtxZEwvZlJ0IFpPbXlaQ1JHcWd4LzNJRTFsUkdZOFRJUlJBbDVFbVZaU01lZ2FGTjJkVm9TWWprWVNxYkowUWFlU282cmw3ZnprdTZTbkY2UTdzSjAgaytVcC9lbTFsdlV1UGtPYkV0aVdZS1ZUcGNLbS9DcjlYZ2lCZVVwRUNkSnByNGcvUDNsbGZNczY2YzNQUmRQa1VNbTEzbkhuaGRjUyBrTzVTcTI3U21WS1E5c0owTDhVMjVpdFg0enY0SEVYU25kdTFrYVQ4S2p4UENZZ1NwQWUrSXU3OHBHdloxU3BOV3BSZFk2VEp3UWFlIDZsOVc1bVlDVHBKc2xscmJLVExMNjZaVG1PNmwyTXQ4WlhIKzlwR0JyeVMxTHNGS3BrcTVwaDYvTGUxODVpbG4zTkNES08rSVdhMmYgL092b0E2cGNxU25yTlBuaUdvYnM1eVUzczBpUk5zTHNUcGZ2VzE4amw2T3htVytxbk9JOTBmbDhhKy8rellSankwd2VEMUdDWFVJVCBuWjhNS0x2YXpFOFdPYWJKK3Zza3pUUnBOeS9abE9RY1VxVE5NVyttU3p0WjZ2bktTNm9jS01GS3AwcmJDb3F0VUdPVVgzMWduaEpSIHdvUU16azhPTGdzSjYzWjFhZUpKbGlhTkwxMTJTNU8za3B4VGlyUlBsL2F5YktUS01Wa0twa3JwcGg3YjhxdkxlNGQ1U2tRSkUrTFQgeURNNFA5bSsvOGI4WkJpdVpkY2thYkwrTWtrOXRXYVhKdnNsdVJSOFpObElsWHIwMktaSmxWT1VYMTJXaWZoK213Z2dTcENRUmVIZSB5T01tSTdsbElmb094Y3F1RW1ueXhlVVBod2FlNWxaMC9sL1NuUCsxMWZ4RXNiRzZYc3lQRXNVbW4xUXBWMzUxZTIvNFFrTVBvZ1FCIFVqVHl1Q2E4UHFUTHJzRnBzaTY1TnRKa1lWdHlmYi94UFBiSDR5SUhzOXRqdlBWTGxUMGxXTmZ2clpSSWxRckpMZTJpcHZwQ3JLRUggRU9YczhSNG9jbXJrR1VPODdCcWFKdXVTcTVrbWN5MjVucC9idmpSdmU2RW1GeHY1dUpaZ2IxTGxVQW5XTWkxS05mWElsRjluMTlCRCBLa1dVNElKTEk0L2sra2s5Z2txVlhXMWwycHNtWDF3dmNMczBtVmFTcGh6MzlYZHJOalk5VndOK0luRzZ5dkltVmVyREY1QXFVNWRmIHh6LzIwZEFEOXkzS1JWL0lMbzA4NHZPVERnUHpxRVFzbDQ3SXBjazA4NUpha0cwNTlyNitsamhqQ2ROMXZuS3FWSGtRT2llMjF6UU4gUFVDaXpCeWZqdGRvQWg2Wm4veGtnckpySjk1cE11NjhaSmNnZmU0amxqQmQ1eXRkVXFYRU5lYUsxRHdsRFQzM0Z6WVE1WXhRYi9MLyBXTVR0ZUpWQ0ZhcWU1bEIyTlJwNDdOTmt4ODQ3Z29PMmhDQlRDZk0yVlE2WFlEdFRaVWRqajNSVGowMWFsRndtRXZXNUZtSmZ1UVdJIDh2NUk4WTBoVjhJYWVad0docGhsMS9JYWIrelRaS3ZrS3BRbVl3Z3l0akNQbmR2Y2JkeFNaVThKVnFyOG1tNmVjcUNoUnhpK2NndFIgUWk2MHV2WEVHM2tFVTgzWW9OcWJKcDNMZnB1YnhDU1JKayt5alNqSVBtR0t5UExtLzlsYXBjcWJ3K3FaS20yRm1xWk84dHpxdlJRSyBXOWtoU2tpSVM4ZXJWQ09QNi9wSktURU1wVW03c212M1p1ZWhhZEtVWkdva1pIbDAzRHhkcDhwTCtUVXdWYVkrWGw0TlBYUytJa29RIEpla2J4cVhqMVhYd0hQcmNMYmwrMG90V21yUXJ1elpMcmhKcGNrcEppc3F5OHpMZURLYktHemNHTnZaSU1FVkR6NFNkcjhnWlVVTFcgQ0RYeUhIMFhucGUzQ1dZOFRiNS9LN21BTkptREpLVmsyWDBleG5mdHVSbFp0aDdQWFdpZWNrNE5QWUFvQVJvRDNOaW5jZWY1eVZhYSB2SlJkRTZmSm9zaXJ0Qmo4V2h4U1pXZjV0U05WcHB5bmxHbm9BVUNVV1pQVEdzcTh3bXRyZnJLVkpzZURUTHcwbWR0eFNwa3FPOHV2IHErNmtEMDNZSEIxUlFzQW4rbmNjaGtpWC9MTFQ1QlNwRXZ4aExTV2lCQTlpZjJ0SWMybUkveHJLS1RwZWJ3TE9pNTQwMURrL3VTbWMgNXRsbW1pYmpQcmZ1VktuTHI1MkhmTUttSHB1R25uN1NyYVVFUkFrZUFvcTUyVUN6aTY5L0RlVlkrL3k2ZnE2am41aUZHbmx1NWlkYiBaZGZ4K2NtT05DbTBKQ1RieWtSZ0YrL3RPZWxQbGVxaGJ1WXBXK1ZYbTNsS3lXOFRHYnRHaDYveDYxcEtsejFmZldEVEFVUUpVeE93IFFIcHNvTjFiTGcwUmFlVHAyd1M5ZTB5MlNwTWhaZGVjMDZUVWN6dzZwTXJ4YzJBdjc2TkFGN1dTb00yMW1jT2VyMnc2Z0NoellyRVQgNWk2YkRVakgwMG02QzUxMzRsa1ZNZWJYNXRDY0l2OGNIZWNxSTVWZkorMThIZmp3eWFZRGlCSnlIUXlMT0pzTlpQMlJ4M3FkM24zTiBUYVo1cmc3cktqM1hWR2JOd0lkUHZtNExVUUprTDRYYlJwN3VOQ214TEdST3g4WDdlSFpLOWpaVjlqYjB3RkkvcWlKS2dMa202NllVICt0TmtyQzluWHVJeHRSY3J4d3NRSlVDVzlFOVp5czlOenFuc0d2YzVkNWRmYnpwZkFSQWxRUGdnN3JRMHBNT0txYWZCNXBoRVV6WDEgZEo0TG82RW45UmM1QXlCS21MOG9DOGVsSVU2TlBKRE5TTE8xbDdia1drb0FSQW5RaTN5M0s3VFpSanZHekI4RG9nUkljbm16TjJsYyAyUDhWRUNYQWpGSGJNSHpEWVlqS2ptTU1pQkpndnJEME96NkhLTWU0TE10aXMxcFJld1ZFQ1hDNkNDMEdSZlV6NjdJOFhrTE1HNDdiIDdNSjlmYzVPeGRxUjgxM1dzb1NzUDRVaVNrNHVwTVJtVUN6TkVQTjRPdzYvNWpBT0h0OTFvb1RXZVM2T3pYT0dBZ0ZSQWlTbXZ3QW8gUDArWlVqcXBQNHk0MFQwL2VTejRJbUpBbEFENVh0Q3FqTHMySlJabm52SmV5b0tudVVKZDhoNzVlSEw2MlhWNTkxVWI5UzJXNzFHOSBRcFNRSDZwQi93ZThPZXNCMjE2cTZ6dG9HQWxOd04wZkNtN1RKUE9LMStQQWZoaUlFakk5a2IxdnpqOVd0ODhXOW9LZEducjZ5NisrIHcvcmN5cS95QW5Qb2RuMHNsdGQ4dGNUM0ZDREt1MlpYdjdGalhFRFZBUHhrc3ptT0RkSmJhYWwwTlBUMGM3L2wxemhDZDF3N0dXSFMgY21WeFRkbGVtNXVSbjBueG52cERkZnZQakZTSUV1eDVWZDMrTnVMOXI5ZEY4ZlRwZUpsMmJCRDV2cnA5Y1Y2Mk1Ydy85YUExTnFnNSBMUkhwQ1M2dlBWSmxYaExLSjAzMnowOE90MDY5SHJrV1JwZUdXSzZoSEx1bTFQMDhWcmRYSXoreld2VU5nOTlWdDkrY0gydGw5NTd4IDViRiszd09pQkV1VWdINGJkZUE4di9Hdmc4SG5Ib05JVWV5cjIwUGlBYjFzZjZwL2N6dDgzemIwOUtmS1ZaVDV1K1dreWR2WDE1MG0gZFNQUFRYanNLTHVXRnVkWTZyZ2U2dmVUSC92Ni9YRit6NmdQbURGNFV0MCtvcjhBVVlKSDZxdHVQMHJ5NWxHRHdkdDVIcVNCOG12MyBPTnVkS2tPRzVOeFRaYXE1eVY2NXNWYkVhaEIreG1GQWxPQXh3RlczNXh3R1llNG5WVXAwdXQ2V1hkblhGUkFseEJtWlFmS0NiYzlUIHRzcXY0enYwM0UrcURCWDQ3ZThQZDdyZUhQdFcyZFZtZmhJWWF4QWxMRlplRXAydks4c21qckk5ZGovZUR1WGQ4NVI2UEhsN0k4dlEgVktubWNuT1JaZW8wMlRzLzJWRjJMVzBlMitJNmtlaDRCVUNVZDBpTVRRZFNkcjU2cDZDZU5aWDlkOVZkZ2kwRmp0VTlwc25PK1VuUCB0Wk8yalR4U0hhOGJZWm15S3craWhCbWNUTnNkUVZ5V2lLVHNmUFdpcDZtblAxWHFrVncyVmVaUWdwMHFUZDZVWFRObzRobnJlQjI3IHRxL1ZBdnVsSWV6S2d5aGh6clIyRW1rdUVablpSZHUxbnRKSWxlYWduVHBWVGxtQzFaS1VUWk83K21nT3A4bUdGM3VXaE14cmZ2SzYgaHZKbWFZandyand6M0d6ZzdoTHpQWXB5RmlkWmZOT0J3WjFFK3RkU1NnL2tVZVlwVzZuU2ZuTTErVlNwWmJsWnI0K3BoSGxPZGVmSCBDNUZrZDVyMCtHTG1ualNaYW41U2h1c2FTcmYza2h0cURlWDcxUkZqc3dGRUNSNm9rdEdYeFh6V1VsbzE5QlJ5ODVTMnFYSzQvTnJkIDJDTXgwNmpMZWpHRjJSYWt4QnpwYlpyOFp1VHhXMlhYZ0RRcE5UODVwMFllMWxBaVNnZ2R0SW84MWxKS05mVEVPRDQzNGVmdGVhQTIgYzlEdzA3b3R3VXArcTBnTVljWVNwR3VhdkNtN2FtTjZwRW5wNjNXS1JoNUFsT0JQMGplalMrZHJyZzA5dHVYWFRqb2FlNFpUcFI3aCA1Vk9sdERCakNGSTBUUVkwOEpRaDU3em5Na2pkeUROaHh5dkNSNVRnZWtKdHUrNm1hT2l4L1NZUjcvS3JIdVBmMkRiMTZIR21XWUtOIDlWMlZwakJ0cEtubEdGdVF6VFE1M01EVG15YmZkUCtjVk5sMWl2V1RMbzA4ZEx3aVNwZ0E4WWFld1c2OXNJWWU5ZW45ZDRMemxOWUQgMlVDcU5BdUg0Nm55VnBZeHk0VmFlS1kwdTI2bUhHT3UwN3pldDRVa0hkT2tSQk9QS2NLeCt4b3J1NDV6N1hqdC9CREcxMnNoU3NnSCA4WWFld1RmNWNFUFAySnpPcWZ3cU9FKzVjdmlxSlpsVXFVZjdYZlJVMlNmTnZsdnN4MjZteWZFdTF5blNwQXMyWmRmaCtjbUJqbGRCIDZIaEZsQ0NZbUhKcDZGa0oxV2tseTYrRHFiTHkvdUdOUzZyVW8vNDFWYTVuOHAyVElaSnNwc2x2eG4vSFRKTUREVHlTcVZ4eVdZamsgdFJ3NitOTHhpaWh6WnRHVDN6RWFlbHdHTktueWEzQ3FyRXV3N3FueTdlSmwyUzNKMSs1cGNtRE41TWJ5dzVCVTJWVjZmbkltalR5TSBuWWlTaTh2M3BQWTJGVVRjb2NkbG1VaVNWRm1QLys2cGN0bXk5SlprVjVwODQzRk9Pc1Fya1NabDVpZWI3NDBaTlBMUThZb29JYWNkIGVxem1LVzBIb1VLMnFXY3dWVmJPZTN4elRaWHIxZjNLTWtTUzIvWDU5MDRoY21UTlpPbzBhWjd1c1BsSkdua0FVYzZPRkR2MFhNdXYgNHcwOVkzTTd0dDJ2TGdLMEhVekxnZEh6VUwyc3QyOWNTckRMazZXdkpNM2tkL0xqeUx5a1pKcDB1VTZPMVRYM3l1SVlERi9ENTBZZSBsN0tyRHpUeUlFcVFIdUFLOTRZZWwzbEt5ZktyUy9lcmRQbTFOMVZxV1Q2NmxtRDdaYW5rUFJkaDZ1VG1MY202NUtxUHh1UElVaERKIE5PbFNkbFVYOHZkaXg2eFZkaDM2b0ZtNHowL1N5SU1vSVpNVGF6dFAyU1NzL0dvT2NLbWJla2FUek02bkJOc3R5MXJLMmFkTG5TSlggamFVbWJwTFVKZGRMbW53VGNBNDgwcVJVRTA5UTJaV05CaERsblhKYytPTU5DaU5rUGFWTitmV0xYRk5sOWRKMmI1ckp3ZjcwM1c2ZyBubXU2N0UrUlgxbExzaTAwMWNYeitEclBOR25UeEdOYmRuVi96ekNHSVVxWUhQR0duZzRrbDRuRWFPb1JTNVdWTEI4cjM3MStZOXp2IDJsWnlXcFpmZGFiTEhJUnBDckk3UmI2emw2UlJjbFhOTzY5SDVpV25TSlBHYVJVcnU4YWVuMVRReURNdjFuZisrc3M1UEo0YTF0VGsgL3kvUG4zZExsd2NyejJOYjJYbW5hc3o4Nkpxc2p0WFFzTnVwbjkzWEkrTEx3VUgwY0RnTTljK2M3dVc5NnVmMkF6K25IMXo5d09GNCBISDF0Tmo5elNVQTl4MHE5em4zMTVQYlZrM3oyOUR3WW4xNlB4WDFmUHdyczZsZjV0SmxZakIxMWp0YjNKeWZJdGZFY21pZmJQa1ZlIGtyNHV1VmFYd3RldjYwN1hZamhOMm14WHQ3WDQzc3lWdzg4VjIrM3hWZlhuYnV4eHE1L3J2ejg5NWZDb1JYbEZKY24vVTc5Zk9nWlEgMVpUak1wQ3E5L0syK3AyL3d6K3pZY01obUkvUlhSdDZCdWNwTzBwSk9sVStQT3pMMFBLclUxT1BZNnJjalltM0tQVGpIdmM5c2pwVSBqdHZwbC9qaVBGOVpQY0p4dHo5WXlrMm55K0k4Vkhha29MSk9sK3AvOW9lRHVEUkxvOHpjbmRMMFRqdHVYNzVzU2xKOVhqb0tTVEpHIG1qeDlJTEZvNGducWRoMG91L3JNVDY0SzVqVG5CcVhYbVpDaS9PclMvU3JaMUdNbWpWRUJxazNFSlVxd0tqc2M2dWFVeTMyN2xHRk4gV1RaTHNlWnJOOHV5RXFYWjByZ3ZYVjVkZGU0SjYxNXF2WkZrY2U1d2ZmMFlmcXpONTI1enpXd3RmMDZtaWFmNUhsaEhyck5SZHAwZiBsRjVuOHBncHlxK1hwR1ZSZnRVRDZYNi9IeXkvN3FxZmUwLzlPWktvOUQvdUxjdVZJaVhZMCtOZFM3QjY4SFVydytvMHNqT2s5TFR6IHVaaWxXVk53UXlWYUxSZFR1cXZCRGRPMUlMOTNFbVNuSkZYSjljMzVBNFZFbXF3M21iZDdIbGJmRmJrcURwWFYvbVhrbFo2K29XVXogVkR4cmxsMjNadHpMdCt6S2pqd0p1ZmZTNjNFaVdYb2JOcGZ5cTYwK0hveFAvdTkydTlJbVZUNk9TRlc2QlB1MmZwa3ZYMXlUWlZtdSBqcWM1VzZkUzdMdmkydTN5L3VEemI3enVnZlRrdGlqZmZTN3lJbU1sU1AxWWorZGxORjhmQlV1dWtkTGtReUhSeEVQWkZURWpTaGhDIHJ3Lzc5RnA2dW42WTE1KzBmOVkvK0ZXRDFXNUFnSHFweUNlQ2M1VkY0YmFqeTloUGFsbnVLaWxzdG1kaG5wN0g2UmRkNWkzMWVQSzIgSG1FM2c4THNFNmRmdmNGOUxySXZSYjU1ZmQ2YzRiR1FrYVNyOEczbkptMlhoTml1blhUWjJ4WHVpeldIWUI2ZHIxbzYzeGFuU21ucCArb0M5NWRkRC9USDNwK2JnY3I3dDkyb2NWUC80OGFDc2hzcXZ4L3J1UDZoL1hxb0R0blRvbEIwcndaNytUWGZDN205THNhdlZ1ZHdwIFhZNE54eXl6UHRZbjAwR1FHelZuZWkzaDZ1N1dkNC9qOTFSZTA3cmRZd2wzdWo3ZGJvK3FyUC83TWVtT2xsM1ZzWHQxK25ENDdGbHggYkZSOGxVUC9YLy9BNlZwMlZhaFZTZitseUhGSkpveFZBbUFtSlF6ZmZWOWR5ejNTVFQxT0d4QTRKQ3lYeHA3MTBFWUVIZW55UzJNSCBuL1BjbW11amp6N1Y3NHFoaGg5L1FlcU5BOXlhZGN3VXFlYzZsV0svdEZnQzBrNlRrcEtjSmswMnIzbVhKaDZmc3F2Zy9xN01UNUlvIEY1OG9neDd6b2JqMDN6amRSejFmV1BhT3V4R2JlbUtseXN0e
                            nRmeTVsVVd5YktUTDZoZzhQRDIvK21kQjZWSXFZZm9ueUs0VXFlN2ggYTZYeDZpL3Y2bktyclNSdFg3eHRBODgwYWRLdmlVZC8rSFR0RjFBZmsvNHJhWEtXTUVjNXM0WWVOVVQrdHJyOU80OFRyVFpKLzY2diAreldncVNmR1hHVTl1SW8yOXVoa1dRdzA5MXp0ZTk3dTdrSE4xVlVENk83RitSaStyT2N1M1p0OXpJVDVhS1RBc1huTW5aRkUzZWNnIEwrZkhhTmJSMjdVZTZxYWRZbUNUOHhCSnVqYndwRStUZmswOHZsL1NyQTd4cS9tT2tZZ1M1aVZuOVVaVjVkZmZPOXpIYVBrMXNLbkggYWdPQ3dxRUR0bkFyd2FwakdrT1d5bXVIM2ZtNVA3NjR0dWpJQ0xQb2tXYTRIQWNGV1F4L242U1VKS1ZMcmk2ZHJ1UFhwSDhUajIvWiA5U01aNFZCMm5RQktyOWRyZnphUDZWdCtqZFhVWXc1T1k5dmEyYTZyMUUvQXRnUzdjaXpYNnArdnY0aTRIQjJhS3RNZnF4ZXdmM3FWIHZuTE1jNzBtY25XZXgvUXZ5NXFsV1YxYTNSY2g1Vlg5Zk5ReFA1Vlk2M3MvT0VqeUpNaXlWQnNsRkRFa3VYTDVXY3QxaytQYjFla2EgUjdvbUhzcXVpQkpSSm43TVhYM2lmdVloeWxxMFZuT1ZMdnUveHBpcmROMkVvSEFRNVNWMVdNNWJhbG1xZzNmY2RRdXpOS1RwSjh6QyBTNDV0UWVvbW5VNUJmbTE0MkRKRjZnOFYxdFVMeTNsSlE2cFc5eGxyYnRKMlgxYzlZUDdRNHoyckh2Ri9NTTRpU21TWjl2SDArL2hIIGtrMDlNMCtWcFdPcU5BZGhKMW5XTGpzK3ZmN25ReTJrcnBTNURoS25YWExzU284WFFSYjFFOU1wOG1CM2NicVVXdThoVFJhRlh4T1AgV3RMMUQ5WGw4dTA4eDBWS3ZRVnpsRk5mZ0VGckt2L2dlY0o3bTNyMEorck01aXB0RzN1S3duMis4dko3WjhrZWp6WUo5bUJZY1Z2OSA1NHZyMTRvMVpoeXIrM3hwdkJBMW4zazUrWTd6bXVaWFh1bmpjbG4vV0Z5L1MvblFEb3Y2SHgwYWR0YjFkMWlta09TYzVpWjltM2pVIDlmQmJwSVVvWWJweWdIaFRUOElPMkorb0FTMGpXVjYrOWNOR21IV2p6K2w0MWNKVTMwSnlLTHFsT1NaT0c0RjFpYkZUam9rRkdWdVMgcXVRNmRhZXJQa1lUTnZIQXhHTXRYTjhIczNyTUtFMDllc0NJUEZkNWNveERDZFoxdm5MbFdZYTlwQkxQY3F5NVBOTDhwM2FKVnQyKyBWMThQVlpkTG54c2JuWmZHSE9QcittZmVxbHZSTEttYUQzc2pTWTh5NnlxQkpJMmZ0L3Z3VXBkYy85a2lUY2FlbTZTSmgwUUowNnluIERDNi8rcXlwREUrVlg5Yi9yLzhlc0s0bFdITkFmclJkQnVLWkxDKy9IMUNPTFY1MC84aER4NisyaytkZ1Vod2ljWXIwa2FUdHB1ZEYgNFY1eUhkL1Q5ZjhtVFpQNmxMeVNHeXVtR0JPQlJEbi9WT25iMUJPV0tuWC9hdjhlc1BvbTJkaWp5NCt1eTBEMExTUmRXaTBsT2JhaSBvK1VHUEYzSjA2bjN0ZDNOZXJCSWtQV1NqNkFVdVY0ZjE3MWY5OVV2U2RlU3EyMER6L0RjNVBjWFphVktrek52NGdFUzVYTHdiZW9KIFM1VnFiSlZwN0hsZFcvZ2oyMVJadU0xWDZrRzNxRGNaOEUyWEV2T1g0a3lRSUgxU3BLc2s5V01vU2RxVVhGMGFlRkttU2NFbUhpQlIga2lxWG1Dck5RV3dvVlI3clFmU2pPcG5zSTh4WG1vTzE3N3hsVjhLOGZQRnkzL0ZySjh5M1JmZ1hpVncyYUxWTGtEbzk2cldOcXdrayBhZnllOVhteVhUUHBzaHhreG1tU3NpdUpFdTQ1VmVybjc5SUZhdzdZajY3TFFOUU9NNVU0MUw1enZ1blNUSmhXS2ZOZ0RNUzdWdm9iIFM1dnRGdGZFNmRFODNucGRwYXNrWGVjbGJidGNTWk5Bb3J5dlJCbjh1SFZnS1gvcThhQmhxVkxIbXBkQnFkS25DOVozZzRIU21MZVUgMkFqQU8yVjJ0Y0syYitadWR2dTA2Zkh5Z2FTZWkxdzV6RWUySmVrNkwybGJjaDFPazljR0h0SWtrQ2poTk5aKzY5RkZhNVVxOVVmNyBUN3RTNWI0WVdsdXBCckgxZVZYM2FCZHNpdm5LbTFRWU9IYzVsREliYnJSSm14NGZjc3p2MkpSS2orM1U3aXJIZG9xTU5TODUzc0N6IGIwdnkySkRrL3laTkFvbHlicWt5K0RIZnhVcVZyYTN0bXFsU0QwaGhheXUxVUh6bUs4djZTNkY5MDZGa3VteEl5OWovdFd3OWp0Vm0gN0QxcFVkOHVxVkhmSkFYcDJOSGFseUpkT21KdDV5WFA0ck5mTTltWkprZTJxdk5OazJyNitPOHRSSjg1cEZnU1pkWVhaM0Q1TlVxcSAxSi9BUC9OTGxYcndIVnRiV1JTZTg1V0dtRUxUcGNUODVWamE3RXFkVnVLTi9Va3RZQjZ5UzVJdXYrTTZMMm03WnJJM1RYNDJmazF0IFBkL0VYOG1KQm1HUktFbVVjMCtWYWdBNmI1aHV0Mk9QemRwS2M3N3loVU95YkFpejhPOXNsWjYvdEUyZG83ZklnZ3laaDVTU3BGekogdGRubHFqWStiK3pwR2pGTi92ZjVwMGtnVWFaTGQvZVFLcHNicGl0Ump1L1lZOU1GYTg1WHVpUkxMY3U2Skhtc0pGYzhocXliakpndyBzL2cwS0pBZ1RVSDJKV2NwU2RwZFE5Y3VWMzJOdW14OFRwb2t4WklvU1pYaHFmSzc0cVlMOXBvcVpicGcyOG5TK2l1NTJzbFNjTjFrIGlvU1pVcEFTQ2JLZElwMDdZaDMyY1RYVHBFdVhhK05ydEN3YWVFaVRRS0s4RTZLbXl0YTZzMmFxMUhrd3ZBdTJuU3cvcVFiSWZaWHMgYkpPbG1TNEx6M25McFNWTXFRUVpraUl2U1ZMdDRWcHZUK2NpU2RzdTE4NDBPYkpta2pRSkpFcFNwVXlxMUFOT2I2clVBMWI0Zk9VbCBXYXA1U284NVN6TmRyb1hYVEpwZHB6bW56RXQ2cko2clJJSU1UcEc2M0ZvOW4zOVIzNHdpSnNuYkx0ZWJORG13WnBJMGlhQVI1UjJLIFVxbnFXWFg3dWNlMmRwdkNyUVI3MjlnelhvSjFsbVhoMStCanlsSmFtTGxLczArT0VvSjhZcFJzZlg3ZlowN1NUcEszSmRkTG1uUW8gdWZxa1NWVS8rVjlJQmxFaXl2dExsWXFIb2VjZ0pNdVQxRWZXVjBySXNpM00wTG5MM0tRWlM0NWRnaXdUU2ZJc1BadjFrbUdTMUFQaCBEejJPVFlRMFNSTVBva1NXcVZQbHQwWEVFdXpvUmdSeXpUMWRzdHdvSVZVM1gyR3VJelRvZEVsVDM2UWVxeUZGZlJPV295azQzektyIC92MW5sU0EzbGJsY0plbmF2S05GNmJLeGdKa21mVGNYK0FySkxCNmFlZkpGWkluS1EvMkdkaDdnQ3N1bWhzR05DTFN1WlpwNzlMMnAgQmgvVkNQSlVMUjlSWm5aWVB0S1ZMa09Ya2d4Sm92VmlUODFBRXArZ0pHVTRKTWpPMStHUklyK296NTJySkYyYWQzdzJGdERIMC9kTCBtYjhpMVpFb1lmNnAwbEJWdkZRNVdJTFZ6MEJtdmxLUEpvOUZlQ20yTGN4MWJwc01ETnhpQ3ZLSjBPWURacWxWZjhPWW5DUzdtM2Q4IFNxNithZklmeitKZmd0d1FOS0tjdFNoRkhudC9QdEhsbjNvODhHaGpqNVVzWlp0N3pIZTNSQ2wyQ21IbWhxUWdmVXV0YnBLVW1aZk0gcUlFSFdTRktSRG5uVktsNEdIc2VBdk9WSWJMOHR2cWRoOEIwMlNYTXpReVdnSVRLY1NPMGRLUzk5T05OQWtscVVWN21KUzBscVFlLyBUQnA0U0pPSUVsbm1raXFqTnZZb1J0ZFgyc3RTelZ1R2xHSkQwbVZibUV0TG1WM3BNVlNRN1JUcFdtcDk4dVRKVVoxekgwazIxa3RhIE5PK1lhVEtUQmg1a2hTZ1JaVTZwY3RvU3JIdXluREpkTGlsbFNxZkhHQ2x5K1BuMFM3SlJjaDNaVk1DVXBFL0o5WnM2c0FLaWhJWEwgMGpkVnBwUmxXNWd1c253MGhLa1N6c3ZBZERtVU1uT1dacDhjcFFTcFV1UytzdFNyV3BBdUtiSXR5V0VzSlJsNVhqSlNBOCtVYVpJayBpeWdSWlo4b3EwL0ZwZEpVMVBuS0NXWFpFS2F4L2QxR1NKaEQwcHhTbktZWU41SFdWamJLckhXS2RCWGtWSkxVQTU3dnZDUnJKdThYIDFsRzZmd0lyNS83WWxVQ09YM3ZlbDdwZ2ZsRDkvbmMyODVYNlczZy9QVXR5ZS80WTMxcGpPZnpWWEhwUXJlZXZqcFVzaTUzRG1zbXUgZFpkcmp3M1diYVJwUHQ5VmE3Mms5RHBOYzUxaisvK1BKV0cxa1hsUnAzVFhkWkZ0UVo2RmwxNlM3M21LTHNLYVNkSWtDWWxqbHZ0aiBxeVpCdFEvc3J6eCtWd1hHdCtmaGEvejViT3JvV205SW9EcGhINnRSNXlwTFBZUjlQQ2pMeTd1N3VvTjlGVXQzSHBKVGovS3NmdTFLIG1FcGVrc0ljRzVYVWM1ZVdWNHFVS2lGSXR4UVpSNUloSmRkSWFSSlJNdWh6ekhKLy9HM2QySk9QTEt1c1dqd2ZGV2FJTEtjVzVseVEgRktTYkpQVVhMKyt6a2VSL0t5NjdXeTJwMHhWUk9vNFpjS2VwVXNrdVpMN1NxcmxIUDVEVm5PVzd3bVhlMG1VSlNYdUVNQnQrSGlMTSBZYzVaa0pjbW5lcFl2UEZzMURIUGxkM1NEek5GZmx2b0hYZVFKSkxNQWVZbzU0Zm9QR25JZktYMWZyQkZZVGxuV1JRdTg1YVh2Vm85IDVpNzFJMzFicS9taFh2VDV0RXFXbjlSemFQZVNNaS9wc1Q0T3YxRU5VRVhZZ25xM3VVaFRrdDgxbjF1QUpQVUh1cTMvZXlPR0pJRkUgU2FxYzQrTS9lcVpLL1NTc1VxVjFzdFRqMG5peWJBdlRKMTJhQ1ZOM3lYNTNKeW16cTRQMUc4OHUxaTVKanErTjdKZWtGcVQ2TU9VciBTZDlOQlhTYS9JY2l5dTQ3cEVrR2U0N2RYQjgvMlh5bHJtTzA1aXdyVVZhUzg1KzNQTi9QOFhUelNaZGRnK3l6K3UrbmxGazM0c3c5IFpiYlQ0Ky8wZDRJS1NNRXZSVnJNUndaSU1yT1NLNkprc09mNElVdC9XV3BoM2piNTZHSFByaXRXV3BpbU5NM21IMDN1NGpURldOdE0gcERrblRKRGRLUkpKSXNsY1lZNFNMb1RPVno2djM0eFdzdFJ6bG1yd2U2OFFtYmMwQis3UStVdVRycm5Nd2hEbnVwWkVEdUljRXFQNSBlcVlWNUcySzdKU2svajdKWFJwSjF1OEI1aVdCUkVtcWpKY3F2WkpsUjdxVUtzWEdTcGp0cEttbCtkUDZzUTZ0OVpLeDVIa2p4VnFNIGFrY2VKY0l2aE1VWUpzamhGS20rY0ZsOS92Q2RqNVNRSkdrU0VPV3lqK0hpWkttRktWR0tqUzNNdGpRTEMzbmFpTFJUaENOU2xFNk4gY29LMFRKRklFbEV5eUhNYzUvTDRPY2xTTWwzR0Z1YVlQTnNTTFlaRVdvdXdxS1gzUlo5b2k3amZqZWd2U01jVXVVeEpraVlaNEdHcCBxWEpTV2I1WFhPWXQ3ZEpsM3NKMGxlZ1VNb3dqU01jVTZUZ2ZpU1FSSmFMa1dHYngrSlBJMGpsZDZpSFR2UnhyQ3ZQMGZDZVFabFlYIHNTSEhHSUtVU3BFemtTUnBrc0VkN2lGVnF2dFVBMUdvTEZWUWVCUk1sOUxsMkJ4U1ppNkNkSmVqS1VuSE1xdG5pbFRmQWhLeTYwNUwga3FSSkdCMktRTzZDTEJmNEhJNXExNTJ2QSs1QURidFByaGZiMFZxV3Uzb2swNFBvcDNwUXIrNXJjeFptY2ZPMVhkL1VBL1ZiTDJHMiBsNVlzT1dXR3AwZTdGSGxUWnAwd1JXb2VrU1NRS08vK2VHWTNYMm1tUys5U3JGTzZsRW1ZWnNxOHZJYVppck10eGpBNWpndFNNa1ZLIFN2Sk81aVVSSmFMa21FN3hIQ1JsNlZXSzFjSnN6VjJtRXViY3hDa3Z4Z0JCQnFiSTBGSnJRa21TSmhuVUFWbkt5REpHdWt3dHpENXggVGlIUExpbktpVkZBa0JPblNDUUppSkxqZW4reXpGQ1lZL0lNbFdpZkRPTkljVnBCU2twU2lmR2ZpaVRiMDFGeVpVQUhaTm1VNVFmViBueDhVRTVkaXRUQTd5ckgyd2l5aVN0TkZvbVBFazJHZkhBdDNRV3BKZXBSWjlWbUpWR3BGa29Bb09iYkpuMGZ3MHBFVTZYSmNtR2xTIDVqem9UNC9XZ3N3Z1JTYVdKS0prTUFka21WYVd3ZW5TUXBpbnh4cE5tV21UNXJSaUxFYlQ0K2xrUnhTa1ZJcEVrb0FvT2NaWlBnL0ogZWNzVXdyUkxtVXNVNTdnWXJkTmpob0xza0dSc2VTQkpCbkZZMkRHZWxTeTFNTDNMc1k3QzdFK1pRK0xNV1o1dEtRNkwwVG85Q2doUyBIMG1wTXV1ZFN4SlJJa3FPODl4a0tkWGtJNVl1TFlYcExzMGhlYVlVYUpjUXg2WG9MRWRCUWNaSWtZazZXNUVrQXpnZ1NwbkhrSnkzIGpDTE13azJhYnVJY0U2aXRVUHNFNkNmRUxqRTZ5YkhJVDVBZEtUS1ZPQkFsQXpnZ1M1bDBLUzFMTGN5Z2NxeGp5cFFUcDZ0UTNRUW8gSmtiQjlCaFRrQjJTVENVTUpNbmdEY2hTVnBiU3BWaXhkT21STW9mRUtTdFBHU2s2aVZFd1BhWVFaT0pTSzVKazRJWTdQZDZwbmsrVSBVcXk0TU52U2RCUm5uenhqQ0xSTGlNNVNiSXRSUUk2eEJkbVJJdTlWa29nU1VYTE1sL2g4WXBWaW93Z3pNRzNhQ3RUN3BMa0tNVkpxIFRDbklEa21tRkFXU1pOQUdaSmxPbGpGS3NXMWhGckdsNlprNGs5Tk9qTUp5VENuSWlVcXRTQklRSmNkOW11Y1VNMTFHVDVsajhrd3QgMFM0WlJwSmlha0ZPbkNKemxSS2laTURtMk4rVExHT215eVFwMDFlaWtrU1VZWjhjOWNVU1c1QVRwa2drQ1lpUzQ1L1BjMHFSTHBPbSB6QVdTS2oxbWtpS1JKQ0JLemtGK3orbHBkWHRSSjh5VXdreWVNbWNveHhUcHNaMGkxYm41YWpveElFbEFsSnlEZko5WHFuSXMwc3hIIGpxWWdKeXl6NWk0alJNa2d6WG5ndWQwSzgwOFR5dkplcFdtS01iVWNUVWxPWEdaRmtvQW9PUmZ6Zkc2cHk3RkQwbHlTT0tkS2pYMHAgY3VJeUs1SUVSTW41bVA5em0xcVlmZUtjZ3p6YmlYRnFPV1ltU0NRSmlKTHpzYXpubDRzd3grU1pXcUpkTXN4RmlnZ1NVVEl3dzcyZSBFNFFaS05FeHFRN0pMMmNaemtDUVNCSVFKZWZsZnA3alhJVHBJOVhjNVRkVFFTSkpRSlNjbS9zVjVzZlY3WWZWYy9rVjEwMFdndnlmIFova2ZmNGQ4a0NTRE1YQis4bm1lQ0JOQklrbEFsSndmbnF1bE1EK3BiaDlWdHovbkdvL090MmRCSGgrcVB4RWtvbVFnQnM3UmpKN3YgcytyMm8zUENJV1ZHU28vYmFuQi9WLzM1VzZTREpCbUVnZk0wNytkTXlseDhlcHl6Y0pBa2d4a2d5M3pRS2JOQW1zNXlWSC9QTkQzTyBXVFpJa29FTU9GLzVQbTlUbWordWJ2K2h1djJlOTBUeDVIekNqbjliLzNmR2NrU1N3TUFMaXp0bjJUNTNKYzJmVkxmOW5hWk5NeldxIEY2MDJRSGlGYUhqdWdDZzViengvbTdTNXRNVFpUb3d6U1kxTGtneVNaTUFDenQzeW5uODdjYzVGbmwxU25GRmlSSkxBWUFXY3Z6bS8gaGk1NVRpSFJMaGt1UklwTEV3eVNaSkFDemlHdncwYWlNUTdjUW1TNFpMa2dTUVluNER6eVdnQ3hJRWtHV09CYzhub0FxU0JKQmxmZyBmUEthQUtId21vQkJpSFBLYXdORXdtc0RCaDdPTGE4TmtBaXZEUmh3NE43UEw5Y3dBdUUxQW9NTWNJNTVuY2lEMXdrTUxzQjU1dlVpIERWNHZNS0FBNTV2WGl6QjR2Y0JBQXB4elhqdWk0TFVEQXdkdzNqa0dDSUpqQUF3V3dQbm5XQ0FGNEZnd09BRFhBSEJja0FISEJSZ00gZ0d1Qlk4VGd6ekVDM3ZqQTljQnhZN0RudUFFREkzQmRjRXdaekJFa01DQUMxd1lBa2dRR1ErQWFBVUNRd0NBSVhDc0FDQklZL0lEciBCUUJKQWdNZkFOY05JRWhnd0FQZytnRUVDY0JBQjF4RGdDUUJHT1NBYXdrUUpBQ0RHM0JOQVNCSVlGQURyaTBBQkFrTVpzQTFCb0FnIGdVRU11TllBRUNRd2VBRnd6UUdDQkFZdEFLNC9RSTdBUUFYQWRRZ0lFaGlnQUxnbUFUa0NNQ2dCMXlZZ1NBQUdJK0E2QmVRSXdBQUUgWEsrQUlBRVllQUM0ZHBFakFJTU5BTmN4Y2dSZ2dBSGd1a2FNQUF3b0FGemp5QkdBUVFTQTZ4NlFJakJnQVBCZUFLUUl3T0FBd1BzRCBLUUl3RUFEdzNrR0dBSWdTZ1BjWEVnUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3c0ZjhMTUFEY205eWZ4eSt6cmdBQUFBQkpSVTVFcmtKZ2dnPT0iIHRyYW5zZm9ybT0ibWF0cml4KC4yNCAwIDAgLjI0IDExLjM5NSAtMzEuNzA4KSIgaGVpZ2h0PSI0ODAiIHdpZHRoPSI0NTQiIG92ZXJmbG93PSJ2aXNpYmxlIj4KPC9pbWFnZT4KPC9zdmc+Cg=="
                          alt=""
                          height="24px"
                          width="24px"
                          {...provided.dragHandleProps}
                        />
                        <Listednotes
                          innerstyle={props.innerstyle}
                          oncheck={() => props.clickcheckboxhandler(listindex)}
                          style={{ marginLeft: "10px" }}
                          list={listitem}
                          listchanged={(value) =>
                            props.listchanged(value, listindex)
                          }
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <input
        className={"inputlist"}
        style={{ display: props.showinput === true ? "block" : "none" }}
        value={input}
        onChange={changeinput}
        onKeyPress={inputHandling}
        autoComplete="off"
        placeholder="+ list item"
      />
      {props.checkedlist && props.checkedlist.length !== 0 ? (
        <div>
          <hr />
          <div style={{ paddingLeft: "20px" }}>Completed item</div>
          {props.checkedlist.map((check, checkindex) => {
            return (
              <div style={{ position: "relative" }}>
                <img
                  onClick={() => props.uncheckHandler(checkindex)}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj48cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0eiIvPgogIDxwYXRoIGQ9Ik0xOCA5bC0xLjQtMS40LTYuNiA2LjYtMi42LTIuNkw2IDEzbDQgNHoiLz4KPC9zdmc+Cg=="
                  alt=""
                  style={{
                    position: "absolute",
                    marginTop: "17px",
                    marginLeft: "17px",
                  }}
                  style={{
                    position: "absolute",
                    marginLeft: "17px",
                    marginTop: "5px",
                  }}
                  height="16"
                  width="16"
                />
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    paddingLeft: "38px",
                    textDecorationLine: "line-through",
                  }}
                  value={check}
                  readOnly
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
export default Noteswithcheckbox;
