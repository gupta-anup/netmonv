from scapy.all import sniff
from scapy.layers.inet import IP, TCP, UDP

packet_data = []

def process_packet(packet):
    if IP in packet:
        proto = 'TCP' if TCP in packet else 'UDP' if UDP in packet else 'Other'
        packet_data.append({
            'src': packet[IP].src,
            'dst': packet[IP].dst,
            'proto': proto,
            'length': len(packet)
        })
        if len(packet_data) > 100:
            packet_data.pop(0)

def get_packets():
    return packet_data

# Run packet sniffer on a separate thread or during app startup
sniff(prn=process_packet, store=False)
