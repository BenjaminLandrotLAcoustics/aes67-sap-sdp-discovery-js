# AES67 SAP/SDP Discovery JavaScript

JavaScript utility for discovering streams of AES67 senders using SAP/SDP discovery mechanism

AES67 senders usually advertise their media streams using SAP/SDP. When the stream details are only available via SAP/SDP but the AES67 receiver does not support the detection and decoding of SAP/SDP messages, it is useful to have a third-party utility to discover advertised streams on the network and read their details.

This simple JavaScript utility allows to perform such detection of SAP announcements, and can be executed on computers for instance using nodeJS.

## How to use with nodeJS

1. Install nodeJS: https://nodejs.org/en/download
2. Open a command-line or terminal shell
3. Navigate to the location of the `sapsdp.js` script
4. Execute the script:

```
node sapsdp.js
```

Example output:

```
Port binded  9875
Added multicast membership 239.255.255.255
Msg From 192.168.1.227:59929
 ���application/sdpv=0
o=- 178325847 178325848 IN IP4 192.168.1.227
s=TX1A
c=IN IP4 233.254.171.0/32
t=0 0
m=audio 5004 RTP/AVP 96
i=Channels 1-8
a=recvonly
a=rtpmap:96 L24/48000/8
a=ptime:1
a=ts-refclk:ptp=IEEE1588-2008:00-60-74-FF-FE-FB-D7-AA:1
a=mediaclk:direct=0
```

## Known limitations

### Network interface segregation

The script does not control which network interface is used for joining the multicast groups. So if the computer has multiple connected network interfaces, there is a risk that the multicast group is joined on the wrong interface and SAP packets are not received.

To ensure the correct network interface is used, before executing the script, disconnect or disable all network interfaces except the appropriate one.

#### References

- [Session Annoucnement Protocol](https://en.wikipedia.org/wiki/Session_Announcement_Protocol)
- [Session Description Protocol](https://en.wikipedia.org/wiki/Session_Description_Protocol)
